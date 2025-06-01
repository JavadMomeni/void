// App.jsx
import React, { useState, useEffect } from 'react';

import Sidebar from './components/Sidebar';
import Dashboard from './components/dashboard';
import Products from './components/products';
import ProductEditModal from './components/productEditModal';
import ProductAddModal from './components/productAddModal';
import Customers from './components/customers';
import CustomerEditModal from './components/customerEditModal';
import CustomerAddModal from './components/customerAddModal';
import Orders from './components/orders';
import OrderAddModal from './components/orderAddModal';
import Settings from './components/settings';
import Login from './components/login';

const API = 'http://localhost:5000/api';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  // states
  const [products, setProducts] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [orders, setOrders] = useState([]);  

  // modals
  const [editingProduct, setEditingProduct] = useState(null);
  const [addingProduct, setAddingProduct] = useState(false);

  const [editingCustomer, setEditingCustomer] = useState(null);
  const [addingCustomer, setAddingCustomer] = useState(false);

  const [addingOrder, setAddingOrder] = useState(false);

  const stats = [
    { title: 'سفارشات جدید', value: `${orders.length} سفارش`, change: '+3%' },
    { title: 'محصولات موجود', value: `${products.length} محصول`, change: '+5%' },
    { title: 'فروش ماه', value: '120,000,000 تومان', change: '+15%' },
    { title: 'کاربران فعال', value: `${customers.length} کاربر`, change: '+2%' },
  ];

  // 📡 بارگذاری اولیه از API Flask
  useEffect(() => {
    if (!currentUser) return;
    fetch(`${API}/products`).then(res => res.json()).then(setProducts);
    fetch(`${API}/customers`).then(res => res.json()).then(setCustomers);
    fetch(`${API}/orders`).then(res => res.json()).then(setOrders);
  }, [currentUser]);

  // Exit
  const handleLogout = () => {
    fetch(`${API}/logout`, {
      method: 'POST',
      credentials: 'include',
    }).then(() => {
      localStorage.removeItem('auth_user');
      setCurrentUser(null);
    });
  };

  // ----------- PRODUCTS -----------
  const handleAddProduct = (newProduct) => {
    fetch(`${API}/products`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newProduct),
    })
      .then(res => res.json())
      .then(data => setProducts(prev => [...prev, data]));
    setAddingProduct(false);
  };

  const handleSaveProduct = (updated) => {
    fetch(`${API}/products/${updated.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updated),
    })
      .then(res => res.json())
      .then(data => {
        setProducts(prev => prev.map(p => (p.id === data.id ? data : p)));
        setEditingProduct(null);
      });
  };

  const handleDeleteProduct = (id) => {
    if (window.confirm('محصول حذف شود؟')) {
      fetch(`${API}/products/${id}`, { method: 'DELETE' })
        .then(() => setProducts(prev => prev.filter(p => p.id !== id)));
    }
  };

  // ----------- CUSTOMERS -----------
  const handleAddCustomer = (newCustomer) => {
    fetch(`${API}/customers`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newCustomer),
    })
      .then(res => res.json())
      .then(data => setCustomers(prev => [...prev, data]));
    setAddingCustomer(false);
  };

  const handleSaveCustomer = (updated) => {
    fetch(`${API}/customers/${updated.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updated),
    })
      .then(res => res.json())
      .then(data => {
        setCustomers(prev => prev.map(c => (c.id === data.id ? data : c)));
        setEditingCustomer(null);
      });
  };

  const handleDeleteCustomer = (id) => {
    if (window.confirm('مشتری حذف شود؟')) {
      fetch(`${API}/customers/${id}`, { method: 'DELETE' })
        .then(() => setCustomers(prev => prev.filter(c => c.id !== id)));
    }
  };

  // ----------- ORDERS -----------
  const handleAddOrder = (newOrder) => {
    fetch(`${API}/orders`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newOrder),
    })
      .then(res => res.json())
      .then(data => setOrders(prev => [...prev, data]));
    setAddingOrder(false);
  };

  const handleDeleteOrder = (id) => {
    if (window.confirm('سفارش حذف شود؟')) {
      fetch(`${API}/orders/${id}`, { method: 'DELETE' })
        .then(() => setOrders(prev => prev.filter(o => o.id !== id)));
    }
  };

  const handleUpdateOrderStatus = (id, newStatus) => {
    const order = orders.find(o => o.id === id);
    const updated = { ...order, status: newStatus };

    fetch(`${API}/orders/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updated),
    })
      .then(res => res.json())
      .then(data => setOrders(prev => prev.map(o => (o.id === id ? data : o))));
  };

  // ----------- RENDERING -----------
  if (!currentUser) {
    return <Login onLogin={setCurrentUser} />;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="flex-1 p-6 overflow-auto">
      <div className="flex justify-end mb-4">
          <button
            onClick={handleLogout}
            className="text-sm text-gray-600 hover:text-red-600"
          >
            خروج از حساب
          </button>
        </div>
        
        {activeTab === 'dashboard' && (
          <Dashboard stats={stats} orders={orders} products={products} />
        )}

        {activeTab === 'products' && (
          <>
            <Products
              products={products}
              onEdit={setEditingProduct}
              onDelete={handleDeleteProduct}
              onAdd={() => setAddingProduct(true)}
            />
            {editingProduct && (
              <ProductEditModal
                product={editingProduct}
                onClose={() => setEditingProduct(null)}
                onSave={handleSaveProduct}
              />
            )}
            {addingProduct && (
              <ProductAddModal
                onClose={() => setAddingProduct(false)}
                onSave={handleAddProduct}
              />
            )}
          </>
        )}

        {activeTab === 'customers' && (
          <>
            <Customers
              customers={customers}
              onEdit={setEditingCustomer}
              onDelete={handleDeleteCustomer}
              onAdd={() => setAddingCustomer(true)}
            />
            {editingCustomer && (
              <CustomerEditModal
                customer={editingCustomer}
                onClose={() => setEditingCustomer(null)}
                onSave={handleSaveCustomer}
              />
            )}
            {addingCustomer && (
              <CustomerAddModal
                onClose={() => setAddingCustomer(false)}
                onSave={handleAddCustomer}
              />
            )}
          </>
        )}

        {activeTab === 'orders' && (
          <>
            <Orders
              orders={orders}
              onDelete={handleDeleteOrder}
              onUpdateStatus={handleUpdateOrderStatus}
              onAdd={() => setAddingOrder(true)}
            />
            {addingOrder && (
              <OrderAddModal
                onClose={() => setAddingOrder(false)}
                onSave={handleAddOrder}
                customers={customers}
                products={products}
              />
            )}
          </>
        )}

        {activeTab === 'settings' && (
          <Settings onSave={(data) => console.log('تنظیمات ذخیره شد:', data)} />
        )}
      </main>
    </div>
  );
}
