'use client';

import { resetPasswordAction } from '@/app/(auth)/reset-password/action';
import ReCaptcha from '@/components/ReCaptcha';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Lock } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState, useTransition } from 'react';

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

const ResetPasswordPage = ({ params }: { params: { token: string } }) => {
  const { token } = params;
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [tokenVerified, setTokenVerified] = useState(false);
  const [tokenError, setTokenError] = useState<string | null>(null);
  const [recaptchaToken, setRecaptchaToken] = useState<string>('');
  const [recaptchaError, setRecaptchaError] = useState<string | null>(null);
  const [showRecaptcha, setShowRecaptcha] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData | null>(null);
  const [, startTransition] = useTransition();
  const [isMobile, setIsMobile] = useState(false);
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  // Verify token on page load
  useEffect(() => {
    const verifyToken = async () => {
      try {
        setIsInitialLoading(true);
        const response = await fetch('/api/auth/verify-reset-token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ token }),
        });

        const data = await response.json();

        if (!response.ok) {
          setTokenError(
            data.error ||
              'Link reset password tidak valid atau sudah kedaluwarsa.'
          );
          setTokenVerified(false);
        } else {
          setTokenVerified(true);
          setTokenError(null);
        }
      } catch (error) {
        console.error('Error verifying token:', error);
        setTokenError(
          'Terjadi kesalahan saat memverifikasi token. Silakan coba lagi.'
        );
        setTokenVerified(false);
      } finally {
        setIsInitialLoading(false);
      }
    };

    verifyToken();
  }, [token]);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 1024);

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleVerify = async (captchaToken: string) => {
    setRecaptchaToken(captchaToken);
    setRecaptchaError(null);

    if (formData && captchaToken) {
      formData.append('recaptchaToken', captchaToken);
      formData.append('token', token);

      setLoading(true);
      try {
        startTransition(async () => {
          const result = await resetPasswordAction(formData);
          if (result.error) {
            setError(result.error);
            setSuccess(false);
          } else {
            setError(null);
            setSuccess(true);

            // Redirect to login after successful password reset
            setTimeout(() => {
              router.push('/login');
            }, 3000);
          }
          setLoading(false);
        });
      } catch {
        setError(
          'Terjadi kesalahan saat mengubah password. Silakan coba lagi.'
        );
        setLoading(false);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    // Basic validation
    if (!password) {
      setError('Password baru diperlukan');
      return;
    }

    if (password.length < 8) {
      setError('Password harus minimal 8 karakter');
      return;
    }

    if (password !== confirmPassword) {
      setError('Password dan konfirmasi password tidak cocok');
      return;
    }

    // Store form data for recaptcha verification
    const data = new FormData();
    data.append('password', password);
    data.append('confirmPassword', confirmPassword);
    setFormData(data);

    // Show recaptcha
    setShowRecaptcha(true);

    // If recaptcha token already exists, submit directly
    if (recaptchaToken) {
      handleVerify(recaptchaToken);
    }
  };

  if (isInitialLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-violet-800/80 via-[#6032A2] to-[#371D5C] px-4 py-8">
        <div className="w-full max-w-md space-y-6 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
          <div className="flex justify-center">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-white border-t-transparent"></div>
          </div>
          <p className="text-center text-white">
            Memverifikasi link reset password...
          </p>
        </div>
      </div>
    );
  }

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
            Reset Password
          </h1>
          <p className="text-sm text-orange-300/80">
            Buat password baru untuk akun Anda
          </p>
        </div>

        {tokenError ? (
          <div className="space-y-4">
            <div className="rounded-lg border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-200">
              {tokenError}
            </div>
            <Link
              href="/forgot-password"
              className="flex w-full items-center justify-center rounded-lg border border-orange-400/50 bg-orange-400/20 px-4 py-2 text-sm font-medium text-white hover:bg-orange-400/30"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Kembali ke lupa password
            </Link>
          </div>
        ) : error ? (
          <div className="rounded-lg border border-red-500/20 bg-red-500/10 p-3 text-sm text-red-200">
            {error}
          </div>
        ) : recaptchaError ? (
          <div className="rounded-lg border border-red-500/20 bg-red-500/10 p-3 text-sm text-red-200">
            {recaptchaError}
          </div>
        ) : null}

        {success ? (
          <div className="space-y-4">
            <div className="rounded-lg border border-green-500/20 bg-green-500/10 p-4 text-sm text-green-200">
              <div className="flex items-center space-x-2">
                <Check className="h-5 w-5 text-green-400" />
                <span>
                  Password berhasil diubah. Anda akan dialihkan ke halaman
                  login...
                </span>
              </div>
            </div>
            <Link
              href="/login"
              className="flex w-full items-center justify-center rounded-lg border border-orange-400/50 bg-orange-400/20 px-4 py-2 text-sm font-medium text-white hover:bg-orange-400/30"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Ke halaman login
            </Link>
          </div>
        ) : tokenVerified ? (
          <>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-white"
                >
                  Password Baru
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Lock className="h-4 w-4 text-white/50" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-lg border border-white/10 bg-white/5 pl-10 pr-3 py-2 text-white placeholder:text-white/50 focus:border-orange-400/50 focus:outline-none focus:ring-1 focus:ring-orange-400/50"
                    placeholder="Minimal 8 karakter"
                    disabled={loading}
                    required
                    minLength={8}
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-white"
                >
                  Konfirmasi Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Lock className="h-4 w-4 text-white/50" />
                  </div>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full rounded-lg border border-white/10 bg-white/5 pl-10 pr-3 py-2 text-white placeholder:text-white/50 focus:border-orange-400/50 focus:outline-none focus:ring-1 focus:ring-orange-400/50"
                    placeholder="Masukkan password yang sama"
                    disabled={loading}
                    required
                  />
                </div>
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
                  'Ubah Password'
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
        ) : null}
      </motion.div>
    </div>
  );
};

export default ResetPasswordPage;
