// src/components/GoogleAuthButton.tsx

import React from 'react';

export default function GoogleAuthButton({ text = "Continue with Google" }: { text?: string }) {
  // Change this to your backend's Google auth endpoint
  const GOOGLE_AUTH_URL = process.env.NEXT_PUBLIC_GOOGLE_AUTH_URL || '/api/auth/google/login';

  return (
    <a
      href={GOOGLE_AUTH_URL}
      className="flex items-center justify-center gap-2 w-full px-4 py-2 border border-gray-300 rounded bg-white hover:bg-gray-50 transition text-gray-800 font-medium mb-4"
      style={{ textDecoration: 'none' }}
    >
      <svg width={22} height={22} viewBox="0 0 22 22">
        <g>
          <path fill="#4285F4" d="M21.55 11.21c0-.77-.07-1.51-.19-2.21H11v4.19h5.92c-.26 1.41-1.04 2.6-2.21 3.39v2.81h3.58c2.09-1.92 3.26-4.76 3.26-8.18z" />
          <path fill="#34A853" d="M11 22c2.97 0 5.47-.98 7.29-2.65l-3.58-2.81c-1 .67-2.29 1.07-3.71 1.07-2.85 0-5.27-1.92-6.13-4.49H1.15v2.83C2.96 19.08 6.67 22 11 22z" />
          <path fill="#FBBC05" d="M4.87 13.12a6.62 6.62 0 010-4.25V6.04H1.15a11.02 11.02 0 000 9.92l3.72-2.84z" />
          <path fill="#EA4335" d="M11 4.34c1.62 0 3.08.56 4.24 1.67l3.18-3.17C16.47 1.03 13.97 0 11 0 6.67 0 2.96 2.92 1.15 7.04l3.72 2.84C5.73 6.26 8.15 4.34 11 4.34z" />
        </g>
      </svg>
      {text}
    </a>
  );
}
