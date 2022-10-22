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

const getAllSales = async (req, res) => {
  const allSales = await salesService.getAllSales();
  res.status(200).json({
    allSales,
  });
};

module.exports = {
  addNewSale,
  getAllSales,
};
