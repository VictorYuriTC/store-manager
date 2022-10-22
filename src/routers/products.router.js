const express = require('express');
const productsController = require('../controllers/products.controller');
const productsValidation = require('../middlewares/products.validation');

const router = express.Router();

router.get('/', productsController.getAllProducts);

router.get('/:id', productsController.findProductById);

router.post(
  '/',
  productsValidation.validateNewProductBody,
  productsController.addNewProduct,
);

router.put(
  '/:id',
  productsValidation.validateNewProductBody,
  productsController.updateProductById,
);

module.exports = router;
