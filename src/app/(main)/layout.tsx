'use client';

import { canAccessCMS } from '@/app/utils/auth';
import SidebarCMS from '@/components/cms/Sidebar';
import { SidebarProvider } from '@/components/ui/sidebar';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import '../globals.css';

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  const isFullWidthPage = ['/invoice/add'].includes(pathname);

  useEffect(() => {
    const checkSession = async () => {
      try {
        const response = await fetch('/api/users/me');
        const data = await response.json();

        if (data.user) {
          setUser(data.user);

          if (!canAccessCMS(data.user.role)) {
            router.push('/login');
          }
        } else {
          router.push('/login');
        }
      } catch (error) {
        console.error('Failed to fetch session:', error);
        router.push('/login');
      }
    };

    checkSession();
  }, [router]);

  return user ? (
    <SidebarProvider>
      <SidebarCMS />
      <main className="flex-1 ml-14 lg:ml-64">
        <div className={`flex-1 h-full ${isFullWidthPage ? 'p-0' : 'p-7'}`}>
          {children}
        </div>
      </main>
    </SidebarProvider>
  ) : null;
}
