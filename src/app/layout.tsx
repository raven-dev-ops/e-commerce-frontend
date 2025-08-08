//  src/app/layout.tsx

import './globals.css';
import { Geist, Geist_Mono } from 'next/font/google';
import ClientLayout from '@/components/ClientLayout';
import type { Metadata } from 'next';
import { siteConfig } from '@/lib/siteConfig';

/* –– fonts –– */
const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' });
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' });

/* –– page & social metadata –– */
export const metadata: Metadata = {
  title: {
    default: siteConfig.siteName,
    template: `%s | ${siteConfig.siteName}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.siteName,
    description: siteConfig.siteTagline,
    images: [
      {
        url: siteConfig.logoPath,
        width: 800,
        height: 800,
        alt: `${siteConfig.siteName} logo`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: [siteConfig.logoPath],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">
        {/* all site-wide providers / wrappers live here */}
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
