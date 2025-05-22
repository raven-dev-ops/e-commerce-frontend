"use client";

import { useState } from 'react';
import { loginWithEmailPassword } from '@/lib/auth'; // Import the custom login function
import { useRouter } from 'next/navigation'; // Import useRouter from next/navigation in App Router

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { token } = await loginWithEmailPassword(email, password); // Call the custom login function
      localStorage.setItem('accessToken', token); // Store the token
      setErrorMsg(null); // Clear any previous errors
      router.push('/');
    } catch (error: any) {
      // Handle login errors (e.g., display a message)
      setErrorMsg(error.response?.data?.detail || 'Login failed');
    }
  };

  return (
    <div className="max-w-sm mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2">
          Email
          <input
            type="email"
            required
            className="w-full border p-2 rounded"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </label>
        <label className="block mb-2">
          Password
          <input
            type="password"
            required
            className="w-full border p-2 rounded"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </label>
        {errorMsg && <div className="text-red-600 mb-2">{errorMsg}</div>}
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-600 text-white rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
}