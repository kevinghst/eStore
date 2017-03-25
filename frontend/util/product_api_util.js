export const getProducts = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/products',
  });
};

export const getUserProducts =(userId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/products/${userId}`,
  });
};

export const deleteProduct = (userId, productId) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/products/${userId},${productId}`,
  });
};
