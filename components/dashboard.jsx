// components/Dashboard.jsx
import React from 'react';

export default function Dashboard({ stats, orders, products }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">داشبورد مدیریت</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-sm text-gray-500">{stat.title}</h3>
            <p className="text-2xl font-bold mt-2">{stat.value}</p>
            <p className={`text-sm mt-2 ${stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
              {stat.change}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">آخرین سفارشات</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-right">
                  <th className="py-2 px-4 text-sm text-gray-500">مشتری</th>
                  <th className="py-2 px-4 text-sm text-gray-500">محصول</th>
                  <th className="py-2 px-4 text-sm text-gray-500">مبلغ</th>
                  <th className="py-2 px-4 text-sm text-gray-500">وضعیت</th>
                </tr>
              </thead>
              <tbody>
                {orders.map(order => (
                  <tr key={order.id} className="border-t hover:bg-gray-50">
                    <td className="py-3 px-4">{order.customer}</td>
                    <td className="py-3 px-4">{order.product}</td>
                    <td className="py-3 px-4">{order.amount}</td>
                    <td className="py-3 px-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs ${
                        order.status === 'تحویل داده شده'
                          ? 'bg-green-100 text-green-800'
                          : order.status === 'ارسال شده'
                          ? 'bg-blue-100 text-blue-800'
                          : order.status === 'لغو شده'
                          ? 'bg-red-100 text-red-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">موجودی محصولات</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-right">
                  <th className="py-2 px-4 text-sm text-gray-500">نام محصول</th>
                  <th className="py-2 px-4 text-sm text-gray-500">قیمت</th>
                  <th className="py-2 px-4 text-sm text-gray-500">موجودی</th>
                </tr>
              </thead>
              <tbody>
                {products.map(product => (
                  <tr key={product.id} className="border-t hover:bg-gray-50">
                    <td className="py-3 px-4">{product.name}</td>
                    <td className="py-3 px-4">{product.price}</td>
                    <td className="py-3 px-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs ${
                        product.stock > 10
                          ? 'bg-green-100 text-green-800'
                          : product.stock > 0
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {product.stock > 0 ? `${product.stock} عدد` : 'تمام شده'}
                      </span>
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
