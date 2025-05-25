import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductListPage from './pages/ProductListPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import Header from './components/Header';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<ProductListPage />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
      </Routes>
    </div>
  );
};

export default App;
