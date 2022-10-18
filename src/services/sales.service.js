const salesModel = require('../models/sales.model');

const addNewSale = async (arrayWithSaleBody) => {
  const promises = arrayWithSaleBody.map(async (product) => salesModel.addNewSale(
    product.quantity,
  ));

  const itemsSold = await Promise.all(promises);

  return itemsSold;
};

const addNewSoldProduct = async (arrayWithSaleBody) => {
    const promises = arrayWithSaleBody.map(async (product) => salesModel.addNewSoldProduct(
      product.quantity,
    ));

  const itemsSold = await Promise.all(promises);
};

module.exports = {
  addNewSale,
};
