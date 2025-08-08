// src/app/page.tsx

import React from 'react';
import { siteConfig } from '@/lib/siteConfig';

const Page: React.FC = () => (
  <div className="relative w-full h-full min-h-screen">
    {/* Background overlay */}
    <div className="home-background absolute inset-0 z-0" />
    {/* Content container */}
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center p-6">
      <h1 className="text-5xl text-white font-bold drop-shadow-lg mb-4">
        {siteConfig.siteName}
      </h1>
      <p className="text-xl text-gray-100 max-w-2xl drop-shadow mb-8">
        {siteConfig.siteTagline}
      </p>
      <div className="flex gap-4">
        <a href="/products" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold">
          Shop Products
        </a>
        <a href="/merch" className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold">
          View Merch
        </a>
      </div>
    </div>
  </div>
);

export default Page;
