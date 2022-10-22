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

const updateProductById = async (productId, productName) => {
  const foundProduct = await productsModel.findProductById(productId);
  console.log('Found here', foundProduct);

  if (!foundProduct) {
    const error = { message: 'Product not found' };
    return { status: 404, error };
  }

  const updatedProduct = await productsModel.updateProductById(productId, productName);

  return updatedProduct;
};

module.exports = {
  getAllProducts,
  findProductById,
  addNewProduct,
  updateProductById,
};
