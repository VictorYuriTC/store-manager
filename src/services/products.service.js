const productsModel = require('../models/products.model');

const getAllProducts = async () => {
  const products = await productsModel.getAllProducts();
  return products;
};

const findProductById = async (productId) => {
  const product = await productsModel.findProductById(productId);

  if (!product && product !== 0) {
    const error = { message: 'Product not found' };
    return { status: 404, error };
  }

  return { status: 200, product };
};

module.exports = {
  getAllProducts,
  findProductById,
};
