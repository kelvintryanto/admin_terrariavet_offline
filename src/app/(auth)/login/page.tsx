'use client';

import ReCaptcha from '@/components/ReCaptcha';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useActionState, useEffect, useState, useTransition } from 'react';
import { loginAction } from './action';

const formVariants = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
      staggerChildren: 0.1,
    },
  },
};

const inputVariants = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const labelVariants = {
  unfocused: {
    y: 10,
    scale: 1,
    opacity: 0,
  },
  focused: {
    y: -10,
    scale: 0.85,
    opacity: 1,
    color: 'rgb(251 146 60)',
  },
};

const Login = () => {
  const router = useRouter();
  const [state, dispatch] = useActionState(loginAction, {
    error: null,
    success: false,
    pending: false,
  });

  const [recaptchaToken, setRecaptchaToken] = useState<string>('');
  const [recaptchaError, setRecaptchaError] = useState<string | null>(null);
  const [showRecaptcha, setShowRecaptcha] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData | null>(null);
  const [isPending, startTransition] = useTransition();
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  const [focusedInput, setFocusedInput] = useState<string | null>(null);
  const [filledInputs, setFilledInputs] = useState<{ [key: string]: boolean }>({
    identifier: false,
    password: false,
  });

  const [isMobile, setIsMobile] = useState(false);

  // Check if user is already logged in
  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Simple cookie check instead of making an API call that will 401
        const cookies = document.cookie.split(';');
        const tokenCookie = cookies.find((cookie) =>
          cookie.trim().startsWith('token=')
        );

        if (tokenCookie) {
          // If token cookie exists, try to redirect to dashboard
          router.push('/dashboard');
        }
      } catch (error) {
        console.error('Error checking authentication:', error);
      } finally {
        setIsCheckingAuth(false);
      }
    };

    checkAuth();
  }, [router]);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 1024);

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (state.redirect) {
      window.location.href = state.redirect;
    }
  }, [state.redirect, router]);

  const handleFocus = (id: string) => setFocusedInput(id);
  const handleBlur = () => setFocusedInput(null);

  const handleVerify = (token: string) => {
    setRecaptchaToken(token);
    setRecaptchaError(null);

    if (formData && token) {
      const newFormData = new FormData();

      for (const [key, value] of formData.entries()) {
        newFormData.append(key, value);
      }

      newFormData.append('recaptchaToken', token);

      startTransition(() => {
        dispatch(newFormData);
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilledInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value.length > 0,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    setFormData(data);

    setShowRecaptcha(true);

    if (recaptchaToken) {
      data.append('recaptchaToken', recaptchaToken);
      dispatch(data);
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-b from-violet-800/80 via-[#6032A2] to-[#371D5C]">
      <div className="flex w-full items-center justify-center px-4 py-8">
        {isCheckingAuth ? (
          <div className="flex items-center justify-center">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-white border-t-transparent"></div>
          </div>
        ) : (
          <div className="flex w-full max-w-md justify-center">
            {/* Login form */}
            <motion.div
              variants={formVariants}
              initial="hidden"
              animate="visible"
              className="w-full space-y-5 bg-white/5 p-6 rounded-2xl border border-white/10"
            >
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-2 text-center"
              >
                <h1 className="text-2xl font-bold tracking-tight text-white">
                  Selamat Datang Kembali
                </h1>
                <p className="text-sm text-orange-300/80">
                  Silakan masuk ke akun Anda
                </p>
              </motion.div>

              {state.error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-lg bg-red-500/10 p-3 text-sm text-red-200 border border-red-500/20"
                >
                  {state.error}
                </motion.div>
              )}

              {recaptchaError && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-lg bg-red-500/10 p-3 text-sm text-red-200 border border-red-500/20"
                >
                  {recaptchaError}
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <motion.div variants={inputVariants} className="space-y-2">
                  <div className="relative">
                    <motion.label
                      htmlFor="identifier"
                      animate={
                        focusedInput === 'identifier' || filledInputs.identifier
                          ? 'focused'
                          : 'unfocused'
                      }
                      variants={labelVariants}
                      className="absolute left-3 text-sm pointer-events-none transition-all duration-200"
                    >
                      Email atau No. Handphone
                    </motion.label>
                    <input
                      id="identifier"
                      name="identifier"
                      type="text"
                      placeholder="Email atau No. Handphone"
                      className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder:text-white/50 focus:border-orange-400/50 focus:outline-none focus:ring-1 focus:ring-orange-400/50 transition-all duration-200 placeholder:opacity-100 focus:placeholder:opacity-0"
                      disabled={state.pending}
                      onFocus={() => handleFocus('identifier')}
                      onBlur={() => handleBlur()}
                      onChange={handleChange}
                    />
                  </div>
                </motion.div>

                <motion.div variants={inputVariants} className="space-y-2">
                  <div className="relative">
                    <motion.label
                      htmlFor="password"
                      animate={
                        focusedInput === 'password' || filledInputs.password
                          ? 'focused'
                          : 'unfocused'
                      }
                      variants={labelVariants}
                      className="absolute left-3 text-sm pointer-events-none transition-all duration-200"
                    >
                      Password
                    </motion.label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      placeholder={
                        focusedInput === 'password' ? '' : 'Password'
                      }
                      className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder:text-white/50 focus:border-orange-400/50 focus:outline-none focus:ring-1 focus:ring-orange-400/50 transition-all duration-200"
                      disabled={state.pending}
                      onFocus={() => handleFocus('password')}
                      onBlur={() => handleBlur()}
                      onChange={handleChange}
                    />
                  </div>
                </motion.div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-orange-500 focus:ring-orange-400"
                    />
                    <label
                      htmlFor="remember-me"
                      className="ml-2 block text-sm text-white"
                    >
                      Ingat saya
                    </label>
                  </div>
                  <Link
                    href="/forgot-password"
                    className="text-sm text-orange-300 hover:text-orange-400 cursor-pointer"
                  >
                    Lupa Password?
                  </Link>
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

                <div>
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    type="submit"
                    disabled={state.pending || isPending}
                    className="flex w-full justify-center rounded-lg bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 px-4 py-2 font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400/50 focus:ring-offset-2 focus:ring-offset-violet-800 disabled:opacity-70"
                  >
                    {state.pending || isPending ? (
                      <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    ) : (
                      'Masuk'
                    )}
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
