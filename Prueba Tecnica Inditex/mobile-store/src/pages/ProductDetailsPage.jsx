import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductById, addToCart } from '../api/api';
import { useCart } from '../context/CartContext';

const ProductDetailsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedStorage, setSelectedStorage] = useState('');
  const { updateCartCount } = useCart();

  useEffect(() => {
    getProductById(id).then(data => {
      setProduct(data);
      setSelectedColor(data.options.colors[0]?.code);
      setSelectedStorage(data.options.storages[0]?.code);
    });
  }, [id]);

  const handleAddToCart = async () => {
    const count = await addToCart({
      id: product.id,
      colorCode: selectedColor,
      storageCode: selectedStorage
    });
    updateCartCount(count);
  };

  if (!product) return <p className="p-4">Cargando...</p>;

  return (
    <div className="p-4 grid md:grid-cols-2 gap-4">
      <img src={product.imgUrl} alt={product.model} className="w-full object-contain" />

      <div className="space-y-2">
        <h2 className="text-xl font-bold">{product.brand} - {product.model}</h2>
        <p>Precio: {product.price || 'No disponible'}</p>
        <p>CPU: {product.cpu}</p>
        <p>RAM: {product.ram}</p>
        <p>OS: {product.os}</p>
        <p>Resolución: {product.displayResolution}</p>
        <p>Batería: {product.battery}</p>
        <p>Cámaras: {product.primaryCamera} / {product.secondaryCmera}</p>
        <p>Dimensiones: {product.dimentions}</p>
        <p>Peso: {product.weight}</p>

        <div className="flex flex-col gap-2 mt-4">
          <label>
            Color:
            <select value={selectedColor} onChange={(e) => setSelectedColor(e.target.value)}>
              {product.options.colors.map(opt => (
                <option key={opt.code} value={opt.code}>{opt.name}</option>
              ))}
            </select>
          </label>
          <label>
            Almacenamiento:
            <select value={selectedStorage} onChange={(e) => setSelectedStorage(e.target.value)}>
              {product.options.storages.map(opt => (
                <option key={opt.code} value={opt.code}>{opt.name}</option>
              ))}
            </select>
          </label>
          <button
            onClick={handleAddToCart}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Añadir al carrito
          </button>
          <Link to="/" className="text-blue-600 underline">← Volver a productos</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
