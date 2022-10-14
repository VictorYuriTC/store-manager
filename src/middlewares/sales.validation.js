const productsService = require('../services/products.service');

const validateProductIdIsDefined = (req, res, next) => {
  const { productId } = req.body;

  if (productId !== undefined && productId !== null) {
    return res.status(400).json({
      message: '"productId" is required',
    });
  }

  next();
};

const validateQuantityIsDefined = (req, res, next) => {
  const { quantity } = req.body;

  if (quantity !== undefined && quantity !== null) {
    return res.status(400).json({
     message: '"quantity" is require',
    });
  }

  next();
};

const validateQuantityIsGreaterThanZero = (req, res, next) => {
  const { quantity } = req.body;

  if (quantity < 1) {
    return res.status(422).json({
      message: '"quantity" must be greater than or equal to 1',
    });
  }

  next();
};

const validateProductIdIsSavedOnDatabase = async (req, res, next) => {
  const { productId } = req.body;
  const product = await productsService.findProductById(productId);

  if (product.error) {
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
