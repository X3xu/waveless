const EXPIRATION_TIME_MS = 1000 * 60 * 60; // 1 hora

export function setCache(key, data) {
  const payload = {
    data,
    timestamp: Date.now()
  };
  localStorage.setItem(key, JSON.stringify(payload));
}

export function getCache(key) {
  const item = localStorage.getItem(key);
  if (!item) return null;

  try {
    const { data, timestamp } = JSON.parse(item);
    const isExpired = Date.now() - timestamp > EXPIRATION_TIME_MS;
    if (isExpired) {
      localStorage.removeItem(key);
      return null;
    }
    return data;
  } catch (error) {
    console.error('Error parsing cache', error);
    return null;
  }
}
