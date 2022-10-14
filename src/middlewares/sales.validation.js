const productsService = require('../services/products.service');

const isProductIdDefined = (productId) => productId === undefined && productId === null;

const isQuantityDefined = (quantity) => quantity !== undefined && quantity !== null;

const isQuantityGreaterThanZero = (quantity) => quantity >= 1;

const isProductIdSavedOnDatabase = async (productId) => {
  const product = await productsService.findProductById(productId);

  if (product.error) return false;
  return true;
};

const validateNewSalesBody = (req, res, next) => {
  const {
    productId,
    quantity,
  } = req.body;

  if (isProductIdDefined(productId)) {
    res.status(400).json({
      message: '"productId" is required',
    });
  }

  next();
};

module.exports = {
  validateNewSalesBody,
};
