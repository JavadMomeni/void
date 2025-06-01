import React from 'react';

export default function Sidebar({ activeTab, setActiveTab }) {
  const items = [
    { key: 'dashboard', label: 'داشبورد' },
    { key: 'orders', label: 'سفارشات' },
    { key: 'products', label: 'محصولات' },
    { key: 'customers', label: 'مشتریان' },
    { key: 'settings', label: 'تنظیمات' },
  ];

  return (
    <aside className="hidden md:flex flex-col w-64 bg-white border-r border-gray-200">
      <div className="p-6 text-center">
        <h1 className="text-2xl font-bold text-indigo-600">مدیریت فروشگاه</h1>
      </div>
      <nav className="flex-1 p-4 space-y-2">
        {items.map(item => (
          <button
            key={item.key}
            onClick={() => setActiveTab(item.key)}
            className={`w-full text-right px-4 py-2 rounded-lg transition-colors ${
              activeTab === item.key ? 'bg-indigo-100 text-indigo-700' : 'hover:bg-gray-100'
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  );
}
