const salesService = require('../services/sales.service');

const addNewSale = async (req, res) => {
  const itemsSold = req.body;
  const id = await salesService.addNewSale(itemsSold);
  res.status(201).json({
    id,
    itemsSold,
  });
};

module.exports = {
  addNewSale,
};
