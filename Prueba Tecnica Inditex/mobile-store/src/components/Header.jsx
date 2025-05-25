import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Header = () => {
  const { cartCount } = useCart();
  const location = useLocation();

  const getBreadcrumb = () => {
    if (location.pathname === '/') return 'Inicio';
    if (location.pathname.includes('/product/')) return 'Detalles del producto';
    return '';
  };

  return (
    <header className="flex justify-between items-center p-4 bg-blue-100 shadow">
      <div className="flex items-center gap-4">
        <Link to="/" className="text-xl font-bold text-blue-700">📱 Mobile Store</Link>
        <span className="text-gray-500">/ {getBreadcrumb()}</span>
      </div>
      <div className="text-sm text-gray-700">
        🛒 Carrito: {cartCount}
      </div>
    </header>
  );
};

export default Header;
