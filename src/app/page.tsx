// src/app/page.tsx

import React from 'react';

const Page: React.FC = () => (
  <div className="relative w-full h-full min-h-screen">
    {/* Background overlay */}
    <div className="home-background absolute inset-0 z-0" />
    {/* Content container */}
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl text-white font-bold text-center drop-shadow-lg mb-8">
        Website Development Progression
      </h1>
      <section className="w-full max-w-xl bg-black/70 rounded-xl p-6 shadow-xl">
        <div>
          <h2 className="text-2xl text-yellow-300 font-semibold mb-2">Tasks Left</h2>
          <ul className="list-disc list-inside text-white pl-4 space-y-1">
            <li>
              Finalize project <span className="font-semibold">timeline</span> in
              <span className="ml-1 underline">timeline.md</span>
            </li>
            <li>
              Flesh out feature <span className="font-semibold">roadmap</span> in
              <span className="ml-1 underline">roadmap.md</span>
            </li>
            <li>
              Expand project documentation in
              <span className="ml-1 underline">wiki.md</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </div>
);

export default Page;
