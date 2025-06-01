// components/Orders.jsx
import React from 'react';

export default function Orders({ orders, onDelete, onUpdateStatus }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">سفارشات</h2>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">لیست سفارشات</h3>
            <button
              onClick={() => alert('افزودن سفارش جدید')}
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              افزودن سفارش جدید
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-right bg-gray-50">
                  <th className="py-3 px-4 text-sm text-gray-600">شماره سفارش</th>
                  <th className="py-3 px-4 text-sm text-gray-600">مشتری</th>
                  <th className="py-3 px-4 text-sm text-gray-600">محصول</th>
                  <th className="py-3 px-4 text-sm text-gray-600">مبلغ</th>
                  <th className="py-3 px-4 text-sm text-gray-600">وضعیت</th>
                  <th className="py-3 px-4 text-sm text-gray-600">عملیات</th>
                </tr>
              </thead>
              <tbody>
                {orders.map(order => (
                  <tr key={order.id} className="border-t hover:bg-gray-50">
                    <td className="py-3 px-4">#ORD{order.id.toString().padStart(3, '0')}</td>
                    <td className="py-3 px-4">{order.customer}</td>
                    <td className="py-3 px-4">{order.product}</td>
                    <td className="py-3 px-4">{order.amount}</td>
                    <td className="py-3 px-4">
                      <select
                        value={order.status}
                        onChange={(e) => onUpdateStatus(order.id, e.target.value)}
                        className="px-3 py-1 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      >
                        <option value="در حال پردازش">در حال پردازش</option>
                        <option value="ارسال شده">ارسال شده</option>
                        <option value="تحویل داده شده">تحویل داده شده</option>
                        <option value="لغو شده">لغو شده</option>
                      </select>
                    </td>
                    <td className="py-3 px-4 space-x-2 space-x-reverse">
                      <button
                        onClick={() => alert('نمایش جزئیات سفارش')}
                        className="text-indigo-600 hover:text-indigo-800"
                      >
                        جزئیات
                      </button>
                      <button
                        onClick={() => onDelete(order.id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        حذف
                      </button>
                      <button
                        onClick={onAdd}
                        className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
                      >
                        افزودن سفارش جدید
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
