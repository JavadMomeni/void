// components/Customers.jsx
import React from 'react';

export default function Customers({ customers, onEdit, onDelete, onAdd }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">مشتریان</h2>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">لیست مشتریان</h3>
            <button
              onClick={onAdd}
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              افزودن مشتری جدید
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-right bg-gray-50">
                  <th className="py-3 px-4 text-sm text-gray-600">نام</th>
                  <th className="py-3 px-4 text-sm text-gray-600">ایمیل</th>
                  <th className="py-3 px-4 text-sm text-gray-600">تلفن</th>
                  <th className="py-3 px-4 text-sm text-gray-600">آدرس</th>
                  <th className="py-3 px-4 text-sm text-gray-600">عملیات</th>
                </tr>
              </thead>
              <tbody>
                {customers.map(customer => (
                  <tr key={customer.id} className="border-t hover:bg-gray-50">
                    <td className="py-3 px-4">{customer.name}</td>
                    <td className="py-3 px-4">{customer.email}</td>
                    <td className="py-3 px-4">{customer.phone}</td>
                    <td className="py-3 px-4">{customer.address}</td>
                    <td className="py-3 px-4 space-x-2 space-x-reverse">
                      <button
                        onClick={() => onEdit(customer)}
                        className="text-indigo-600 hover:text-indigo-800"
                      >
                        ویرایش
                      </button>
                      <button
                        onClick={() => onDelete(customer.id)}
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
