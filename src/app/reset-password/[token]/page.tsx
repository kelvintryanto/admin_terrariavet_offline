'use client';

import ReCaptcha from '@/components/ReCaptcha';
import { motion } from 'framer-motion';
import { ArrowLeft, LockKeyhole } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState, useTransition } from 'react';
import { resetPasswordAction } from './action';

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

export default function ResetPasswordPage({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = params as unknown as { token: string };
  const decodedToken = decodeURIComponent(token);

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [tokenValid, setTokenValid] = useState<boolean | null>(null);
  const [tokenChecking, setTokenChecking] = useState(true);
  const [recaptchaToken, setRecaptchaToken] = useState<string>('');
  const [recaptchaError, setRecaptchaError] = useState<string | null>(null);
  const [showRecaptcha, setShowRecaptcha] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData | null>(null);
  const [, startTransition] = useTransition();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 1024);

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Verify token validity when component mounts
  useEffect(() => {
    async function verifyToken() {
      try {
        const response = await fetch('/api/verify-reset-token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ token: decodedToken }),
        });

        const data = await response.json();
        setTokenValid(data.valid);
        setTokenChecking(false);
      } catch (e) {
        console.error('Error verifying token:', e);
        setTokenValid(false);
        setTokenChecking(false);
      }
    }

    verifyToken();
  }, [decodedToken]);

  const handleVerify = async (recToken: string) => {
    setRecaptchaToken(recToken);
    setRecaptchaError(null);

    if (formData && recToken) {
      const newFormData = new FormData();

      // Copy all entries from the stored formData
      for (const [key, value] of formData.entries()) {
        newFormData.append(key, value);
      }

      newFormData.append('recaptchaToken', recToken);

      setLoading(true);
      try {
        startTransition(async () => {
          const result = await resetPasswordAction(newFormData);
          if (result.error) {
            setError(result.error);
            setSuccess(false);
          } else {
            setError(null);
            setSuccess(true);
          }
          setLoading(false);
        });
      } catch (e) {
        console.error('Error during password reset:', e);
        setError(
          'Terjadi kesalahan saat mengatur ulang password. Silakan coba lagi.'
        );
        setLoading(false);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    // Basic validation
    if (password.length < 6) {
      setError('Password harus minimal 6 karakter');
      return;
    }

    if (password !== confirmPassword) {
      setError('Password tidak cocok');
      return;
    }

    // Store form data for recaptcha verification
    const data = new FormData();
    data.append('password', password);
    data.append('token', decodedToken);
    setFormData(data);

    // Show recaptcha
    setShowRecaptcha(true);

    // If recaptcha token already exists, submit directly
    if (recaptchaToken) {
      handleVerify(recaptchaToken);
    }
  };

  // Show loading state while token is being verified
  if (tokenChecking) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-violet-800/80 via-[#6032A2] to-[#371D5C]">
        <div className="rounded-lg border border-white/10 bg-white/5 p-8 text-center text-white">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-white border-t-transparent mx-auto mb-3" />
          <p>Memverifikasi token reset password...</p>
        </div>
      </div>
    );
  }

  // Show error if token is invalid
  if (tokenValid === false) {
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
              Link Tidak Valid
            </h1>
            <p className="text-sm text-orange-300/80">
              Link reset password tidak valid atau sudah kedaluwarsa.
            </p>
          </div>

          <div className="rounded-lg border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-200">
            <p>
              Link reset password ini tidak valid atau sudah kedaluwarsa.
              Silakan meminta link reset password yang baru.
            </p>
          </div>

          <Link
            href="/forgot-password"
            className="flex w-full items-center justify-center rounded-lg border border-orange-400/50 bg-orange-400/20 px-4 py-2 text-sm font-medium text-white hover:bg-orange-400/30"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Kembali ke halaman lupa password
          </Link>
        </motion.div>
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
            Silakan buat password baru untuk akun Anda
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
              Password Anda berhasil diubah. Silakan login dengan password baru
              Anda.
            </div>
            <Link
              href="/login"
              className="flex w-full items-center justify-center rounded-lg border border-orange-400/50 bg-orange-400/20 px-4 py-2 text-sm font-medium text-white hover:bg-orange-400/30"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Kembali ke halaman login
            </Link>
          </div>
        ) : (
          <>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-white"
                >
                  Password Baru
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder:text-white/50 focus:border-orange-400/50 focus:outline-none focus:ring-1 focus:ring-orange-400/50"
                  disabled={loading}
                  required
                  minLength={6}
                />
                <p className="text-xs text-white/50">Minimal 6 karakter</p>
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-white"
                >
                  Konfirmasi Password
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
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
                    <LockKeyhole className="mr-2 h-4 w-4" />
                    Atur Ulang Password
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
}
