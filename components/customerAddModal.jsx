// components/CustomerAddModal.jsx
import React from 'react';

export default function CustomerAddModal({ onClose, onSave }) {
  const [formData, setFormData] = React.useState({
    username: '',
    name: '',
    email: '',
    phone: '',
    address: '',
    image: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    const newCustomer = { ...formData, id: Date.now() };
    onSave(newCustomer);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-30">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-6">
        <h3 className="text-lg font-semibold mb-4">افزودن مشتری جدید</h3>
        <form className="space-y-4">
          <input
            name="username"
            placeholder="نام کاربری"
            value={formData.username}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded"
          />
          <input
            name="name"
            placeholder="نام کامل"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded"
          />
          <input
            name="email"
            type="email"
            placeholder="ایمیل"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded"
          />
          <input
            name="phone"
            placeholder="شماره تماس"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded"
          />
          <input
            name="address"
            placeholder="آدرس"
            value={formData.address}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded"
          />
          <input
            name="image"
            placeholder="لینک تصویر"
            value={formData.image}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded"
          />
          <div className="flex justify-end space-x-2 space-x-reverse mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-100"
            >
              انصراف
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
            >
              ذخیره مشتری
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
