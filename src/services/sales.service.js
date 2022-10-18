const salesModel = require('../models/sales.model');

const addNewSale = async (arrayWithSaleBody) => {
  const promises = arrayWithSaleBody.map((product) => salesModel.addNewSale(product.quantity));

  const result = Promise.all(promises);

  return result;
};

module.exports = {
  addNewSale,
};
