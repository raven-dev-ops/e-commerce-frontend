// src/middleware.ts

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const accessToken = request.cookies.get('accessToken')?.value;

  // Redirect unauthenticated users trying to access /cart to login page
  if (!accessToken && request.nextUrl.pathname === '/cart') {
    const loginUrl = new URL('/auth/login', request.url);
    // Optional: uncomment to redirect back after login
    // loginUrl.searchParams.set('next', request.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  // Proceed to requested page or next middleware
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Only protect /cart here; other auth routes can be added later
    '/cart',
  ],
};
