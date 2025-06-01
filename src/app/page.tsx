// src/app/page.tsx

import React from 'react';
import Layout from '../components/Layout';

const Page: React.FC = () => {
  return (
    <Layout>
      {/* The background image */}
      <div className="home-background" />

      {/* Centered content; no manual height calculation needed */}
      <h1 className="text-3xl text-white text-center drop-shadow-lg z-10">
        Under Construction
      </h1>
    </Layout>
  );
};

export default Page;
