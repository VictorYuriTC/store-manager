const { connection } = require('./connection');

const addNewSoldProduct = async (saleBody) => {
    const columns = Object.keys(saleBody)
    .map((key) => `${key}`)
    .join(', ');

  const placeholders = Object.keys(saleBody)
    .map(() => '?')
    .join(', ');

  const [{ insertId }] = await connection.execute(
    `INSERT INTO sales_products (${columns}) VALUE (${placeholders})`,
    [...Object.values(saleBody)],
  );
  return insertId;
};

module.exports = {
  addNewSoldProduct,
};
