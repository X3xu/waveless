import { getCache, setCache } from '../utils/cache';

const API_URL = 'https://itx-frontend-test.onrender.com/api';

export async function getProducts() {
  const cacheKey = 'products';
  const cached = getCache(cacheKey);
  if (cached) return cached;

  const response = await fetch(`${API_URL}/product`);
  const data = await response.json();
  setCache(cacheKey, data);
  return data;
}

export async function getProductById(id) {
  const cacheKey = `product_${id}`;
  const cached = getCache(cacheKey);
  if (cached) return cached;

  const response = await fetch(`${API_URL}/product/${id}`);
  const data = await response.json();
  setCache(cacheKey, data);
  return data;
}

export async function addToCart({ id, colorCode, storageCode }) {
  const response = await fetch(`${API_URL}/cart`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id, colorCode, storageCode })
  });

  const data = await response.json();
  return data.count;
}
