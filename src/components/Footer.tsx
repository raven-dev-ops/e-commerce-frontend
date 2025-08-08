// src/components/Footer.tsx

import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/lib/siteConfig';

const Footer: React.FC = () => (
  <footer
    className="h-auto py-6 px-4 flex flex-col items-center justify-center mt-auto"
    style={{
      background: 'var(--background)',
      color: 'var(--foreground)',
      borderTop: '1.5px solid var(--dark-grey)',
    }}
  >
    <div className="w-full flex flex-col md:flex-row items-center justify-center gap-4 text-base font-normal">
      <Link className="hover:underline hover:text-blue-600 transition" href="/privacy-policy" target="_blank" rel="noopener noreferrer">
        Privacy Policy
      </Link>
      <span className="hidden md:inline text-gray-400">|</span>
      <Link className="hover:underline hover:text-blue-600 transition" href="/terms-of-service" target="_blank" rel="noopener noreferrer">
        Terms of Service
      </Link>
      <span className="hidden md:inline text-gray-400">|</span>
      <Link className="hover:underline hover:text-blue-600 transition" href="/refund-policy" target="_blank" rel="noopener noreferrer">
        Refund Policy
      </Link>
      <span className="hidden md:inline text-gray-400">|</span>
      <Link className="hover:underline hover:text-blue-600 transition" href="/contact" target="_blank" rel="noopener noreferrer">
        Contact Us
      </Link>
    </div>
    <div className="w-full text-center mt-2 text-xs" style={{ color: 'var(--foreground)' }}>
      &copy; {new Date().getFullYear()} {siteConfig.siteName}. All rights reserved.
    </div>
  </footer>
);

export default Footer;
