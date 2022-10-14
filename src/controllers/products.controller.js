const productsService = require('../services/products.service');

const getAllProducts = async (req, res) => {
  const products = await productsService.getAllProducts();
  res.status(200).json(products);
};

const findProductById = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const product = await productsService.findProductById(id);

  if (product.error) {
    return res.status(product.status).json(product.error);
  }

  res.status(product.status).json(product.product);
};

const addNewProduct = async (req, res) => {
  const newProduct = await productsService.addNewProduct(req.body);
  res.status(newProduct.status).json(newProduct.newProductId);
};

module.exports = {
  getAllProducts,
  findProductById,
  addNewProduct,
};
