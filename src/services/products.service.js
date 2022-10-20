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

const addNewProduct = async (productBody) => {
  const newProduct = await productsModel.addNewProduct(productBody);
  const newProductId = await productsModel.findProductById(newProduct);
  return { status: 201, newProductId };
};

module.exports = {
  getAllProducts,
  findProductById,
  addNewProduct,
};
