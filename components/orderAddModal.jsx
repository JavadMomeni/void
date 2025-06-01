// components/OrderAddModal.jsx
import React from 'react';

export default function OrderAddModal({ onClose, onSave, customers, products }) {
  const [formData, setFormData] = React.useState({
    customer: '',
    product: '',
    amount: '',
    status: 'در حال پردازش',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    const newOrder = {
      ...formData,
      id: Date.now(),
    };
    onSave(newOrder);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-30">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-xl p-6">
        <h3 className="text-lg font-semibold mb-4">افزودن سفارش جدید</h3>
        <form className="space-y-4">
          <div>
            <label className="block text-sm mb-1">مشتری</label>
            <select
              name="customer"
              value={formData.customer}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded"
            >
              <option value="">-- انتخاب مشتری --</option>
              {customers.map(c => (
                <option key={c.id} value={c.name}>{c.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm mb-1">محصول</label>
            <select
              name="product"
              value={formData.product}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded"
            >
              <option value="">-- انتخاب محصول --</option>
              {products.map(p => (
                <option key={p.id} value={p.name}>{p.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm mb-1">مبلغ</label>
            <input
              name="amount"
              placeholder="مثلاً 2,500,000 تومان"
              value={formData.amount}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">وضعیت</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded"
            >
              <option>در حال پردازش</option>
              <option>ارسال شده</option>
              <option>تحویل داده شده</option>
              <option>لغو شده</option>
            </select>
          </div>
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
              ثبت سفارش
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
