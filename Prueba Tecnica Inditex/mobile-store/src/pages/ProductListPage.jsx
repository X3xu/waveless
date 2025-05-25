import React, { useEffect, useState } from 'react';
import { getProducts } from '../api/api';
import SearchBar from '../components/SearchBar';
import ProductItem from '../components/ProductItem';

const ProductListPage = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  const filtered = products.filter(p =>
    p.brand.toLowerCase().includes(search.toLowerCase()) ||
    p.model.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <SearchBar value={search} onChange={setSearch} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {filtered.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductListPage;