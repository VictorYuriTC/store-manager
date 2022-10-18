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

module.exports = router;
