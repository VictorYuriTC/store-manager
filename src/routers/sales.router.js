const express = require('express');
/* const salesValidation = require('../middlewares/sales.validation'); */
const salesControllers = require('../controllers/sales.controllers');

const router = express.Router();

/* router.post(
  '/',
  salesValidation.validateProductIdIsDefined,
  salesValidation.validateQuantityIsDefined,
  salesValidation.validateQuantityIsGreaterThanZero,
  salesValidation.validateProductIdIsSavedOnDatabase,
  salesControllers.addNewSale,
); */

router.get(
  '/',
  salesControllers.getAllSales,
);

router.get(
  '/:id',
  salesControllers.findSaleById,
);

module.exports = router;
