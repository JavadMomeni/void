// components/Settings.jsx
import React, { useState } from 'react';

export default function Settings({ onSave }) {
  const [formData, setFormData] = useState({
    storeName: 'فروشگاه اینترنتی من',
    email: 'info@example.com',
    phone: '02112345678',
    address: 'تهران، خیابان اصلی، پلاک 100',
    instagram: '',
    facebook: '',
    telegram: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave?.(formData);
    alert('تنظیمات با موفقیت ذخیره شد.');
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">تنظیمات</h2>
      <div className="bg-white rounded-lg shadow-md p-6 max-w-3xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">نام فروشگاه</label>
            <input
              type="text"
              name="storeName"
              value={formData.storeName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">آدرس ایمیل</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">شماره تماس</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">آدرس فروشگاه</label>
            <textarea
              name="address"
              rows="3"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">شبکه‌های اجتماعی</label>
            <div className="space-y-2">
              <input
                type="url"
                name="instagram"
                placeholder="Instagram URL"
                value={formData.instagram}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
              <input
                type="url"
                name="facebook"
                placeholder="Facebook URL"
                value={formData.facebook}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
              <input
                type="url"
                name="telegram"
                placeholder="Telegram URL"
                value={formData.telegram}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>
          </div>
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              ذخیره تنظیمات
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
