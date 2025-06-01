// components/Login.jsx
import React, { useState } from 'react';

export default function Login({ onLogin }) {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    try {
      const res = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(form),
      });

      if (res.status === 200) {
        const data = await res.json();
        localStorage.setItem('auth_user', JSON.stringify(data.user));
        onLogin(data.user);
      } else {
        const msg = await res.json();
        setError(msg.message || 'خطای ورود');
      }
    } catch (err) {
      setError('خطا در ارتباط با سرور');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center mb-6">ورود به پنل مدیریت</h2>

        {error && <p className="text-red-600 text-sm text-center mb-4">{error}</p>}

        <div className="mb-4">
          <label className="block mb-1 text-sm">ایمیل</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block mb-1 text-sm">رمز عبور</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
        >
          ورود
        </button>
      </form>
    </div>
  );
}
