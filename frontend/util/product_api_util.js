export const getProducts = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/products',
  });
};
