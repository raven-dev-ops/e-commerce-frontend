// components/ClientLayout.tsx

"use client";

import { useEffect, useState } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SessionProvider } from 'next-auth/react';
import { useStore, StoreState } from '@/store/useStore';
import { GoogleOAuthProvider } from '@react-oauth/google';

const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string;

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState<any>(null);

  const hydrateCart = useStore((state: StoreState) => state.hydrateCart);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      hydrateCart();
      const token = localStorage.getItem('accessToken');
      if (token) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
        setUserInfo(null);
      }
    }
  }, [hydrateCart]);

  return (
    <SessionProvider>
      <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex flex-grow items-center justify-center">
            {children}
          </main>
          {/* Optional: add <Footer /> if you want a site-wide footer */}
          {/* <Footer /> */}
        </div>
      </GoogleOAuthProvider>
    </SessionProvider>
  );
}
