const express = require('express');
const productsController = require('../controllers/products.controller');

const router = express.Router();

router.get('/', productsController.getAllProducts);
router.get('/:id', productsController.findProductById);
router.post('/', productsController.addNewProduct);

module.exports = {
  router,
};
