'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

interface LoginForm {
  email: string;
  password: string;
}

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState<LoginForm>({ email: '', password: '' });
  const [error, setError] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Simple validation
    if (!form.email || !form.password) {
      setError('Please enter both email and password.');
      return;
    }

    setError('');

    // Simulate login success
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-400 to-purple-500">
      <div className="bg-white rounded-3xl shadow-xl p-10 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Login</h1>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-linear-to-r from-blue-500 to-purple-600 text-white font-bold hover:scale-105 transform transition"
          >
            Login
          </button>
        </form>

        <p className="text-center text-gray-500 mt-4">
          Dont have an account? <span className="text-blue-500 cursor-pointer" onClick={() => router.push('/register')}>Sign Up</span>
        </p>



      </div>
    </div>
  );
}