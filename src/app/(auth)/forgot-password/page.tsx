'use client';

import ReCaptcha from '@/components/ReCaptcha';
import { motion } from 'framer-motion';
import { ArrowLeft, RefreshCw, Send } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState, useTransition } from 'react';
import { forgotPasswordAction } from './action';

const formVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string>('');
  const [recaptchaError, setRecaptchaError] = useState<string | null>(null);
  const [showRecaptcha, setShowRecaptcha] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData | null>(null);
  const [, startTransition] = useTransition();
  const [isMobile, setIsMobile] = useState(false);
  const [canResend, setCanResend] = useState(false);
  const [countdown, setCountdown] = useState(60); // 60 seconds countdown

  useEffect(() => {
    setIsMobile(window.innerWidth <= 1024);

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Countdown timer effect after successful email send
  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (success && countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            setCanResend(true);
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [success, countdown]);

  const handleVerify = async (token: string) => {
    setRecaptchaToken(token);
    setRecaptchaError(null);

    if (formData && token) {
      const newFormData = new FormData();
      newFormData.append('email', email);
      newFormData.append('recaptchaToken', token);

      setLoading(true);
      try {
        startTransition(async () => {
          const result = await forgotPasswordAction(newFormData);
          if (result.error) {
            setError(result.error);
            setSuccess(false);
          } else {
            setError(null);
            setSuccess(true);
            setCanResend(false);
            setCountdown(60); // Reset countdown
            setShowRecaptcha(false); // Hide recaptcha after success
          }
          setLoading(false);
        });
      } catch {
        setError('Terjadi kesalahan saat mengirim email. Silakan coba lagi.');
        setLoading(false);
      }
    }
  };

  const handleResend = () => {
    if (!canResend) return;

    setCanResend(false);
    setCountdown(60);

    // Create a new form data for resend
    const newFormData = new FormData();
    newFormData.append('email', email);

    // No need to show reCAPTCHA, directly send the email
    setLoading(true);
    try {
      startTransition(async () => {
        const result = await forgotPasswordAction(newFormData);
        if (result.error) {
          setError(result.error);
          setSuccess(false);
        } else {
          setError(null);
          setSuccess(true);
        }
        setLoading(false);
      });
    } catch {
      setError('Terjadi kesalahan saat mengirim email. Silakan coba lagi.');
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    if (!email) {
      setError('Email diperlukan');
      return;
    }

    // Store form data for recaptcha verification
    const data = new FormData();
    data.append('email', email);
    setFormData(data);

    // Show recaptcha
    setShowRecaptcha(true);

    // If recaptcha token already exists, submit directly
    if (recaptchaToken) {
      handleVerify(recaptchaToken);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-violet-800/80 via-[#6032A2] to-[#371D5C] px-4 py-8">
      <motion.div
        variants={formVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-md space-y-6 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
      >
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-bold tracking-tight text-white">
            Lupa Password
          </h1>
          <p className="text-sm text-orange-300/80">
            Masukkan email Anda untuk menerima link reset password
          </p>
        </div>

        {error && (
          <div className="rounded-lg border border-red-500/20 bg-red-500/10 p-3 text-sm text-red-200">
            {error}
          </div>
        )}

        {recaptchaError && (
          <div className="rounded-lg border border-red-500/20 bg-red-500/10 p-3 text-sm text-red-200">
            {recaptchaError}
          </div>
        )}

        {success ? (
          <div className="space-y-4">
            <div className="rounded-lg border border-green-500/20 bg-green-500/10 p-4 text-sm text-green-200">
              Email instruksi reset password telah dikirim. Silakan periksa
              inbox Anda dan ikuti instruksi di dalamnya.
            </div>

            <div className="flex flex-col space-y-3">
              <button
                onClick={handleResend}
                disabled={!canResend || loading}
                className="flex w-full items-center justify-center rounded-lg border border-orange-400/50 bg-orange-400/20 px-4 py-2 text-sm font-medium text-white hover:bg-orange-400/30 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                ) : (
                  <>
                    <RefreshCw className="mr-2 h-4 w-4" />
                    {canResend
                      ? 'Kirim Ulang Email'
                      : `Kirim Ulang (${countdown}s)`}
                  </>
                )}
              </button>

              <Link
                href="/login"
                className="flex w-full items-center justify-center rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Kembali ke halaman login
              </Link>
            </div>
          </div>
        ) : (
          <>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder:text-white/50 focus:border-orange-400/50 focus:outline-none focus:ring-1 focus:ring-orange-400/50"
                  disabled={loading}
                  required
                />
              </div>

              {showRecaptcha && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4"
                >
                  <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                    <h3 className="text-center text-white text-sm mb-3">
                      Mohon verifikasi bahwa Anda bukan robot
                    </h3>
                    <div className="flex justify-center items-center w-full overflow-hidden px-2">
                      <ReCaptcha
                        onVerify={handleVerify}
                        onExpired={() => {
                          setRecaptchaToken('');
                          setRecaptchaError(
                            'Verifikasi reCAPTCHA telah kedaluwarsa. Silakan verifikasi kembali.'
                          );
                        }}
                        size={isMobile ? 'compact' : 'normal'}
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              <button
                type="submit"
                className="flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 px-4 py-2 font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400/50 focus:ring-offset-2 focus:ring-offset-violet-800 disabled:opacity-70"
                disabled={loading}
              >
                {loading ? (
                  <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Kirim Link Reset
                  </>
                )}
              </button>
            </form>

            <div className="text-center">
              <Link
                href="/login"
                className="text-sm text-orange-300 hover:text-orange-400"
              >
                Kembali ke halaman login
              </Link>
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default ForgotPasswordPage;
