// components/ProductAddModal.jsx
import React from 'react';

export default function ProductAddModal({ onClose, onSave }) {
  const [formData, setFormData] = React.useState({
    name: '',
    price: '',
    stock: 0,
    category: '',
    description: '',
    slug: '',
    image: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    const newProduct = { ...formData, id: Date.now() };
    onSave(newProduct);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-30">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-6">
        <h3 className="text-lg font-semibold mb-4">افزودن محصول جدید</h3>
        <form className="space-y-4">
          <input name="name" placeholder="نام محصول" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border rounded" />
          <input name="price" placeholder="قیمت" value={formData.price} onChange={handleChange} className="w-full px-4 py-2 border rounded" />
          <input name="stock" type="number" placeholder="موجودی" value={formData.stock} onChange={handleChange} className="w-full px-4 py-2 border rounded" />
          <input name="category" placeholder="دسته‌بندی" value={formData.category} onChange={handleChange} className="w-full px-4 py-2 border rounded" />
          <textarea name="description" placeholder="توضیحات" value={formData.description} onChange={handleChange} className="w-full px-4 py-2 border rounded" />
          <input name="slug" placeholder="اسلاگ" value={formData.slug} onChange={handleChange} className="w-full px-4 py-2 border rounded" />
          <input name="image" placeholder="لینک تصویر" value={formData.image} onChange={handleChange} className="w-full px-4 py-2 border rounded" />

          <div className="flex justify-end space-x-2 space-x-reverse mt-6">
            <button type="button" onClick={onClose} className="px-4 py-2 border rounded">انصراف</button>
            <button type="button" onClick={handleSubmit} className="px-4 py-2 bg-indigo-600 text-white rounded">ذخیره</button>
          </div>
        </form>
      </div>
    </div>
  );
}
