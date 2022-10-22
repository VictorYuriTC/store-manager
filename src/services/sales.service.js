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

const findSaleById = async (queriedId) => {
  const foundSale = await salesModel.findSaleById(queriedId);
  const saleHasBeenFound = foundSale.length > 0;

  if (!saleHasBeenFound) {
    const error = { message: 'Sale not found' };
    return { status: 404, error };
  }

  return foundSale;
};

module.exports = {
  addNewSale,
  addNewSoldProduct,
  getAllSales,
  findSaleById,
};
