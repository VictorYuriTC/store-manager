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
  console.log(itemsSold);

  return itemsSold;
};

module.exports = {
  addNewSale,
  addNewSoldProduct,
};
