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

  if (!foundProduct) {
    const error = { message: 'Product not found' };
    return { status: 404, error };
  }

  const updatedProduct = await productsModel.updateProductById(productId, productName);

  return updatedProduct;
};

const deleteProductById = async (productId) => {
  const foundProduct = await productsModel.findProductById(productId);
  const doesProductExist = foundProduct !== undefined && foundProduct !== null;
  console.log(foundProduct);

  if (!doesProductExist) {
    const error = { message: 'Product not found' };
    return { status: 404, error };
  }

  const deletedProduct = await productsModel.deleteProductById(productId);
  return deletedProduct;
};

module.exports = {
  getAllProducts,
  findProductById,
  addNewProduct,
  updateProductById,
  deleteProductById,
};
