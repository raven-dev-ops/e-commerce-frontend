// src/components/Layout.tsx

import React, { ReactNode } from 'react';
import Header from './Header';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-1 flex items-center justify-center relative overflow-hidden">
      {children}
    </main>
    <footer className="h-16 flex items-center justify-center bg-gray-800 text-white">
      <div className="w-full text-center">
        <p>
          &copy; {new Date().getFullYear()} TwiinZ Beard Balm & Essentials. All rights reserved.
        </p>
      </div>
    </footer>
  </div>
);

export default Layout;
