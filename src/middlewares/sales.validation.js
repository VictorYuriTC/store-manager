const productsModel = require('../models/products.model');

const validateProductIdIsDefined = (req, res, next) => {
  const soldProducts = req.body;

  const doAllSoldProductsHaveProductId = soldProducts
    .every((product) => product.productId !== undefined && product.productId !== null);

  if (!doAllSoldProductsHaveProductId) {
    return res.status(400).json({
      message: '"productId" is required',
    });
  }
  next();
};

const validateQuantityIsDefined = (req, res, next) => {
  const soldProducts = req.body;

  const doAllSoldProductsHaveQuantity = soldProducts
    .every((product) => product.quantity !== undefined && product.quantity !== null);

  if (!doAllSoldProductsHaveQuantity) {
    return res.status(400).json({
      message: '"quantity" is required',
  });
  }

  next();
};

const validateQuantityIsGreaterThanZero = (req, res, next) => {
  const soldProducts = req.body;

  const doAllSoldProductsHaveQuantityGreaterThanZero = soldProducts
    .every((product) => product.quantity > 0);

  if (!doAllSoldProductsHaveQuantityGreaterThanZero) {
    return res.status(422).json({
      message: '"quantity" must be greater than or equal to 1',
    });
  }

  next();
};

const validateProductIdIsSavedOnDatabase = async (req, res, next) => {
  const soldProducts = req.body;
  const promises = soldProducts
    .map((product) => {
      const foundProduct = productsModel.findProductById(product.productId);
      return foundProduct;
    });
  const solvedPromises = await Promise.all(promises);

  const doAllSoldProductsExistInDatabase = solvedPromises
    .every((promise) => promise !== undefined);

  if (!doAllSoldProductsExistInDatabase) {
    return res.status(404).json({
      message: 'Product not found',
    });
  }

  next();
};

module.exports = {
  validateProductIdIsDefined,
  validateQuantityIsDefined,
  validateQuantityIsGreaterThanZero,
  validateProductIdIsSavedOnDatabase,
};
