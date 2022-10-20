const salesService = require('../services/sales.service');

const addNewSale = async (req, res) => {
  const itemsToBeSold = req.body;
  const id = await salesService.addNewSale();
  const itemsSold = await salesService.addNewSoldProduct(itemsToBeSold);
  res.status(201).json({
    id,
    itemsSold,
  });
};

module.exports = {
  addNewSale,
};
