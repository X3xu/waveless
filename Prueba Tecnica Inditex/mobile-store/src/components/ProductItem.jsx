import React from 'react';
import { Link } from 'react-router-dom';

const ProductItem = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} className="border p-4 rounded hover:shadow transition">
      <img src={product.imgUrl} alt={product.model} className="w-full h-40 object-contain mb-2" />
      <h3 className="font-semibold">{product.brand}</h3>
      <p>{product.model}</p>
      <p className="text-green-600 font-bold">{product.price ? `${product.price} €` : 'Precio no disponible'}</p>
    </Link>
  );
};

export default ProductItem;
