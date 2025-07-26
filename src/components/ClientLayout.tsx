"use client";

import { useEffect } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useStore, StoreState } from '@/store/useStore';

const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string;

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const hydrateCart = useStore((state: StoreState) => state.hydrateCart);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      hydrateCart();
    }
  }, [hydrateCart]);

  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex flex-grow flex-col">
          {children}
        </main>
        <Footer />
      </div>
    </GoogleOAuthProvider>
  );
}
