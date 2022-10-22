const productsService = require('../services/products.service');

const getAllProducts = async (req, res) => {
  const products = await productsService.getAllProducts();
  res.status(200).json(products);
};

const findProductById = async (req, res) => {
  const { id } = req.params;
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

const updateProductById = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const updatedProduct = await productsService.updateProductById(id, name);

  if (updatedProduct.error) {
    const { message } = updatedProduct.error;
    return res.status(updatedProduct.status).json({ message });
  }

  res.status(200).json({
    id,
    name,
  });
};

module.exports = {
  getAllProducts,
  findProductById,
  addNewProduct,
  updateProductById,
};
