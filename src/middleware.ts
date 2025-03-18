import { getUserFromRequest } from '@/app/api/auth/server-auth';
import { canAccessCMS } from '@/app/utils/server-auth-utils';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  try {
    const user = await getUserFromRequest();

    // No user found, redirect to login
    if (!user) {
      return NextResponse.redirect(new URL('/login', request.url));
    }

    // Check if user has CMS access
    const hasAccess = canAccessCMS(user.role);

    // If no access, redirect to home
    if (!hasAccess) {
      return NextResponse.redirect(new URL('/', request.url));
    }

    const response = NextResponse.next();
    return response;
  } catch (error) {
    console.error('Middleware error:', error);
    return NextResponse.redirect(new URL('/login', request.url));
  }
}

// Configure which routes to run middleware on
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|login).*)'],
};
