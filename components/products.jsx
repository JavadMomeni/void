// components/Products.jsx
import React from 'react';

export default function Products({ products, onEdit, onDelete, onAdd }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">محصولات</h2>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">لیست محصولات</h3>
            <button
              onClick={onAdd}
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              افزودن محصول جدید
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-right bg-gray-50">
                  <th className="py-3 px-4 text-sm text-gray-600">نام محصول</th>
                  <th className="py-3 px-4 text-sm text-gray-600">قیمت</th>
                  <th className="py-3 px-4 text-sm text-gray-600">موجودی</th>
                  <th className="py-3 px-4 text-sm text-gray-600">تصویر</th>
                  <th className="py-3 px-4 text-sm text-gray-600">عملیات</th>
                </tr>
              </thead>
              <tbody>
                {products.map(product => (
                  <tr key={product.id} className="border-t hover:bg-gray-50">
                    <td className="py-3 px-4">{product.name}</td>
                    <td className="py-3 px-4">{product.price}</td>
                    <td className="py-3 px-4">{product.stock} عدد</td>
                    <td className="py-3 px-4">
                      <img
                        src={product.image}
                        alt="Product"
                        className="h-10 w-10 object-cover rounded"
                      />
                    </td>
                    <td className="py-3 px-4 space-x-2 space-x-reverse">
                      <button
                        onClick={() => onEdit(product)}
                        className="text-indigo-600 hover:text-indigo-800"
                      >
                        ویرایش
                      </button>
                      <button
                        onClick={() => onDelete(product.id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        حذف
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
