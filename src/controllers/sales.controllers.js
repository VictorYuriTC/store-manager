const salesService = require('../services/sales.service');

const addNewSale = async (req, res) => {
  const products = await salesService.addNewSale(req.body);
  res.status(201).json({ message: products });
};

module.exports = {
  addNewSale,
};
