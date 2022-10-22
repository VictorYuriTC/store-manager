const salesModel = require('../models/sales.model');
const salesProductsModel = require('../models/sales.products.model');

const addNewSale = async () => {
  const saleId = await salesModel.addNewSale();

  return saleId;
};

const addNewSoldProduct = async (arrayWithSaleBody) => {
  const promises = arrayWithSaleBody.map((product) => salesProductsModel
    .addNewSoldProduct(product));

  const itemsSold = await Promise.all(promises);

  return itemsSold;
};

const getAllSales = async () => {
  const allSales = await salesModel.getAllSales();
  return allSales;
};

module.exports = {
  addNewSale,
  addNewSoldProduct,
  getAllSales,
};
