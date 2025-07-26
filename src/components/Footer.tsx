// src/components/Footer.tsx

import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => (
  <footer className="h-auto py-6 px-4 flex flex-col items-center justify-center bg-gray-800 text-white mt-auto">
    <div className="w-full flex flex-col md:flex-row items-center justify-center gap-4 text-sm font-normal">
      <Link href="/privacy-policy" passHref>
        <a
          className="hover:underline text-gray-300 hover:text-white transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          Privacy Policy
        </a>
      </Link>
      <span className="hidden md:inline text-gray-500">|</span>
      <Link href="/terms-of-service" passHref>
        <a
          className="hover:underline text-gray-300 hover:text-white transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          Terms of Service
        </a>
      </Link>
      <span className="hidden md:inline text-gray-500">|</span>
      <Link href="/refund-policy" passHref>
        <a
          className="hover:underline text-gray-300 hover:text-white transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          Refund Policy
        </a>
      </Link>
      <span className="hidden md:inline text-gray-500">|</span>
      <Link href="/contact" passHref>
        <a
          className="hover:underline text-gray-300 hover:text-white transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact Us
        </a>
      </Link>
    </div>
    <div className="w-full text-center mt-2 text-xs text-gray-400">
      &copy; {new Date().getFullYear()} TwiinZ Beard Balm &amp; Essentials. All rights reserved.
    </div>
  </footer>
);

export default Footer;
