import React, { useState } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedOrderCustomer, setSelectedOrderCustomer] = useState(null);
  const [editingProduct, setEditingProduct] = useState(null);
  const [editingCustomer, setEditingCustomer] = useState(null);

  // Mock data
  const orders = [
    { id: 1, customer: 'علی احمدی', product: 'گوشی هوشمند', amount: '2,400,000 تومان', status: 'در حال پردازش' },
    { id: 2, customer: 'سارا محمدی', product: 'لپ‌تاپ 15 اینچی', amount: '9,800,000 تومان', status: 'ارسال شده' },
    { id: 3, customer: 'محمود رضایی', product: 'هدفون بلوتوثی', amount: '750,000 تومان', status: 'تحویل داده شده' },
    { id: 4, customer: 'نرگس کاظمی', product: 'صفحه نمایش 24 اینچی', amount: '1,600,000 تومان', status: 'لغو شده' },
  ];

  const products = [
    { id: 1, name: 'گوشی هوشمند', price: '2,400,000 تومان', stock: 15, category: 'موبایل', description: 'گوشی با عملکرد عالی', slug: 'smartphone', image: 'https://picsum.photos/seed/smartphone/400 ' },
    { id: 2, name: 'لپ‌تاپ 15 اینچی', price: '9,800,000 تومان', stock: 8, category: 'لپ‌تاپ', description: 'لپ‌تاپ گیمینگ قدرتمند', slug: 'laptop', image: 'https://picsum.photos/seed/laptop/400 ' },
    { id: 3, name: 'هدفون بلوتوثی', price: '750,000 تومان', stock: 22, category: 'صوتی', description: 'هدفون با کیفیت صدای بالا', slug: 'headphones', image: 'https://picsum.photos/seed/headphones/400 ' },
    { id: 4, name: 'صفحه نمایش 24 اینچی', price: '1,600,000 تومان', stock: 5, category: 'نمایشگر', description: 'صفحه نمایش Full HD', slug: 'monitor', image: 'https://picsum.photos/seed/monitor/400 ' },
  ];

  const customers = [
    { id: 1, username: 'ali123', name: 'علی احمدی', email: 'ali@example.com', phone: '09123456789', address: 'تهران، خیابان ولیعصر', image: 'https://picsum.photos/seed/customer1/400 ' },
    { id: 2, username: 'sara456', name: 'سارا محمدی', email: 'sara@example.com', phone: '09129876543', address: 'اصفهان، خیابان طالقانی', image: 'https://picsum.photos/seed/customer2/400 ' },
    { id: 3, username: 'mahmoud789', name: 'محمود رضایی', email: 'mahmoud@example.com', phone: '09121234567', address: 'مشهد، خیابان جمهوری اسلامی', image: 'https://picsum.photos/seed/customer3/400 ' },
    { id: 4, username: 'narges101', name: 'نرگس کاظمی', email: 'narges@example.com', phone: '09129871234', address: 'شیراز، خیابان زند', image: 'https://picsum.photos/seed/customer4/400 ' },
  ];

  const stats = [
    { title: 'سفارشات جدید', value: '12 سفارش', change: '+3%' },
    { title: 'محصولات موجود', value: '45 محPRODUCTs', change: '-2%' },
    { title: 'فروش ماه', value: '120,000,000 تومان', change: '+15%' },
    { title: 'کاربران فعال', value: '890 کاربر', change: '+5%' },
  ];

  const handleDeleteOrder = (id) => {
    if (window.confirm('آیا مطمئن هستید که می‌خواهید این سفارش را حذف کنید؟')) {
      alert(`سفارش با شناسه ${id} حذف شد.`);
    }
  };

  const handleDeleteProduct = (id) => {
    if (window.confirm('آیا مطمئن هستید که می‌خواهید این محصول را حذف کنید؟')) {
      alert(`محصول با شناسه ${id} حذف شد.`);
    }
  };

  const handleDeleteCustomer = (id) => {
    if (window.confirm('آیا مطمئن هستید که می‌خواهید این مشتری را حذف کنید؟')) {
      alert(`مشتری با شناسه ${id} حذف شد.`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-64 bg-white border-r border-gray-200">
        <div className="p-6 text-center">
          <h1 className="text-2xl font-bold text-indigo-600">مدیریت فروشگاه</h1>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`w-full text-right px-4 py-2 rounded-lg transition-colors ${
              activeTab === 'dashboard' ? 'bg-indigo-100 text-indigo-700' : 'hover:bg-gray-100'
            }`}
          >
            داشبورد
          </button>
          <button
            onClick={() => setActiveTab('orders')}
            className={`w-full text-right px-4 py-2 rounded-lg transition-colors ${
              activeTab === 'orders' ? 'bg-indigo-100 text-indigo-700' : 'hover:bg-gray-100'
            }`}
          >
            سفارشات
          </button>
          <button
            onClick={() => setActiveTab('products')}
            className={`w-full text-right px-4 py-2 rounded-lg transition-colors ${
              activeTab === 'products' ? 'bg-indigo-100 text-indigo-700' : 'hover:bg-gray-100'
            }`}
          >
            محصولات
          </button>
          <button
            onClick={() => setActiveTab('customers')}
            className={`w-full text-right px-4 py-2 rounded-lg transition-colors ${
              activeTab === 'customers' ? 'bg-indigo-100 text-indigo-700' : 'hover:bg-gray-100'
            }`}
          >
            مشتریان
          </button>
          <button
            onClick={() => setActiveTab('settings')}
            className={`w-full text-right px-4 py-2 rounded-lg transition-colors ${
              activeTab === 'settings' ? 'bg-indigo-100 text-indigo-700' : 'hover:bg-gray-100'
            }`}
          >
            تنظیمات
          </button>
        </nav>
      </aside>

      {/* Mobile sidebar toggle */}
      <div className="md:hidden flex items-center justify-between p-4 bg-white border-b border-gray-200">
        <h1 className="text-xl font-bold text-indigo-600">مدیریت فروشگاه</h1>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-20 bg-black bg-opacity-50">
          <div className="absolute right-0 top-0 h-full w-64 bg-white shadow-lg">
            <div className="p-4">
              <button onClick={() => setIsMobileMenuOpen(false)} className="mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <nav className="space-y-2">
                <button
                  onClick={() => {
                    setActiveTab('dashboard');
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full text-right px-4 py-2 rounded-lg transition-colors ${
                    activeTab === 'dashboard' ? 'bg-indigo-100 text-indigo-700' : 'hover:bg-gray-100'
                  }`}
                >
                  داشبورد
                </button>
                <button
                  onClick={() => {
                    setActiveTab('orders');
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full text-right px-4 py-2 rounded-lg transition-colors ${
                    activeTab === 'orders' ? 'bg-indigo-100 text-indigo-700' : 'hover:bg-gray-100'
                  }`}
                >
                  سفارشات
                </button>
                <button
                  onClick={() => {
                    setActiveTab('products');
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full text-right px-4 py-2 rounded-lg transition-colors ${
                    activeTab === 'products' ? 'bg-indigo-100 text-indigo-700' : 'hover:bg-gray-100'
                  }`}
                >
                  محصولات
                </button>
                <button
                  onClick={() => {
                    setActiveTab('customers');
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full text-right px-4 py-2 rounded-lg transition-colors ${
                    activeTab === 'customers' ? 'bg-indigo-100 text-indigo-700' : 'hover:bg-gray-100'
                  }`}
                >
                  مشتریان
                </button>
                <button
                  onClick={() => {
                    setActiveTab('settings');
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full text-right px-4 py-2 rounded-lg transition-colors ${
                    activeTab === 'settings' ? 'bg-indigo-100 text-indigo-700' : 'hover:bg-gray-100'
                  }`}
                >
                  تنظیمات
                </button>
              </nav>
            </div>
          </div>
        </div>
      )}

      {/* Main content */}
      <main className="flex-1 p-6 overflow-auto">
        {/* Dashboard View */}
        {activeTab === 'dashboard' && (
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
                        <React.Fragment key={order.id}>
                          <tr className="border-t hover:bg-gray-50">
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
                        </React.Fragment>
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
                        <th className="py-2 px-4 text-sm text-gray-500">عملیات</th>
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
                          <td className="py-3 px-4">
                            <button className="text-indigo-600 hover:text-indigo-800">ویرایش</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Orders View */}
        {activeTab === 'orders' && (
          <div>
            <h2 className="text-2xl font-bold mb-6">سفارشات</h2>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">لیست سفارشات</h3>
                  <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
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
                        <React.Fragment key={order.id}>
                          <tr className="border-t hover:bg-gray-50">
                            <td className="py-3 px-4">#ORD{order.id.toString().padStart(3, '0')}</td>
                            <td className="py-3 px-4">{order.customer}</td>
                            <td className="py-3 px-4">{order.product}</td>
                            <td className="py-3 px-4">{order.amount}</td>
                            <td className="py-3 px-4">
                              <select className="px-3 py-1 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                                <option selected={order.status === 'در حال پردازش'}>در حال پردازش</option>
                                <option selected={order.status === 'ارسال شده'}>ارسال شده</option>
                                <option selected={order.status === 'تحویل داده شده'}>تحویل داده شده</option>
                                <option selected={order.status === 'لغو شده'}>لغو شده</option>
                              </select>
                            </td>
                            <td className="py-3 px-4 space-x-2 space-x-reverse">
                              <button
                                onClick={() => setSelectedOrderCustomer(order.customer)}
                                className="text-indigo-600 hover:text-indigo-800"
                              >
                                جزئیات
                              </button>
                              <button
                                onClick={() => handleDeleteOrder(order.id)}
                                className="text-red-600 hover:text-red-800"
                              >
                                حذف
                              </button>
                            </td>
                          </tr>
                        </React.Fragment>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Products View */}
        {activeTab === 'products' && (
          <div>
            <h2 className="text-2xl font-bold mb-6">محصولات</h2>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">لیست محصولات</h3>
                  <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
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
                        <React.Fragment key={product.id}>
                          <tr className="border-t hover:bg-gray-50">
                            <td className="py-3 px-4">{product.name}</td>
                            <td className="py-3 px-4">{product.price}</td>
                            <td className="py-3 px-4">{product.stock} عدد</td>
                            <td className="py-3 px-4">
                              <img src={product.image} alt="Product" className="h-10 w-10 object-cover rounded" />
                            </td>
                            <td className="py-3 px-4 space-x-2 space-x-reverse">
                              <button
                                onClick={() => setEditingProduct({ ...product })}
                                className="text-indigo-600 hover:text-indigo-800"
                              >
                                ویرایش
                              </button>
                              <button
                                onClick={() => handleDeleteProduct(product.id)}
                                className="text-red-600 hover:text-red-800"
                              >
                                حذف
                              </button>
                            </td>
                          </tr>
                        </React.Fragment>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Edit Product Modal */}
            {editingProduct && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-30">
                <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-6">
                  <h3 className="text-lg font-semibold mb-4">ویرایش محصول</h3>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">نام محصول</label>
                      <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg" defaultValue={editingProduct.name} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">قیمت</label>
                      <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg" defaultValue={editingProduct.price} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">دسته‌بندی</label>
                      <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg" defaultValue={editingProduct.category || 'دسته‌بندی'} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">موجودی</label>
                      <input type="number" className="w-full px-4 py-2 border border-gray-300 rounded-lg" defaultValue={editingProduct.stock} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">توضیحات</label>
                      <textarea rows="3" className="w-full px-4 py-2 border border-gray-300 rounded-lg" defaultValue={editingProduct.description}></textarea>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">اسلاگ</label>
                      <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg" defaultValue={editingProduct.slug} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">تصویر</label>
                      <input type="url" className="w-full px-4 py-2 border border-gray-300 rounded-lg" defaultValue={editingProduct.image} />
                    </div>
                    <div className="flex justify-end space-x-2 space-x-reverse mt-6">
                      <button
                        type="button"
                        onClick={() => setEditingProduct(null)}
                        className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100"
                      >
                        انصراف
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          alert('اطلاعات مشتری به‌روز شد.');
                          setEditingProduct(null);
                        }}
                        className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                      >
                        ذخیره تغییرات
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Customers View */}
        {activeTab === 'customers' && (
          <div>
            <h2 className="text-2xl font-bold mb-6">مشتریان</h2>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">لیست مشتریان</h3>
                  <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
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
                              onClick={() => setEditingCustomer({ ...customer })}
                              className="text-indigo-600 hover:text-indigo-800"
                            >
                              ویرایش
                            </button>
                            <button
                              onClick={() => handleDeleteCustomer(customer.id)}
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

            {/* Edit Customer Modal */}
            {editingCustomer && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-30">
                <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-6">
                  <h3 className="text-lg font-semibold mb-4">ویرایش مشتری</h3>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">نام کاربری</label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        defaultValue={editingCustomer.username}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">نام</label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        defaultValue={editingCustomer.name}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">ایمیل</label>
                      <input
                        type="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        defaultValue={editingCustomer.email}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">تلفن</label>
                      <input
                        type="tel"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        defaultValue={editingCustomer.phone}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">آدرس</label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        defaultValue={editingCustomer.address}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">رمز عبور</label>
                      <input
                        type="password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        placeholder="********"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">تصویر</label>
                      <input
                        type="url"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        defaultValue={editingCustomer.image}
                      />
                    </div>
                    <div className="flex justify-end space-x-2 space-x-reverse mt-6">
                      <button
                        type="button"
                        onClick={() => setEditingCustomer(null)}
                        className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100"
                      >
                        انصراف
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          alert('اطلاعات مشتری به‌روز شد.');
                          setEditingCustomer(null);
                        }}
                        className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                      >
                        ذخیره تغییرات
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Settings View */}
        {activeTab === 'settings' && (
          <div>
            <h2 className="text-2xl font-bold mb-6">تنظیمات</h2>
            <div className="bg-white rounded-lg shadow-md p-6 max-w-3xl mx-auto">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">نام فروشگاه</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    defaultValue="فروشگاه اینترنتی من"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">آدرس ایمیل</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    defaultValue="info@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">شماره تماس</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    defaultValue="02112345678"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">آدرس فروشگاه</label>
                  <textarea
                    rows="3"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    defaultValue="تهران، خیابان اصلی، پلاک 100"
                  ></textarea>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">شبکه های اجتماعی</label>
                  <div className="space-y-2">
                    <input
                      type="url"
                      placeholder="Instagram URL"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <input
                      type="url"
                      placeholder="Facebook URL"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <input
                      type="url"
                      placeholder="Telegram URL"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
        )}
      </main>
    </div>
  );
}