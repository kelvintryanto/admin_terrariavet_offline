'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to dashboard
    router.push('/dashboard');
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen">
      <p className="text-lg">Redirecting to dashboard...</p>
    </div>
  );
}
