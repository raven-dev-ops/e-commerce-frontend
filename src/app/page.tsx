// src/app/page.tsx

import React from 'react';
import Layout from '../components/Layout';

const Page: React.FC = () => {
  return (
    <Layout>
      <div
        className="flex-1 flex items-center justify-center w-full"
        style={{
          backgroundImage: `url('/images/background-image.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          minHeight: '100%', 
        }}
      >
        <h1 className="text-3xl text-white text-center drop-shadow-lg">Under Construction</h1>
      </div>
    </Layout>
  );
};

export default Page;
