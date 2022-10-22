const { connection } = require('./connection');

const addNewSale = async () => {
/*   const columns = Object.keys(saleBody)
    .map((key) => `${key}`)
    .join(', ');

  const placeholders = Object.keys(saleBody)
    .map(() => '?')
    .join(', ');
 */
  const [{ insertId }] = await connection.execute(
    'INSERT INTO sales (id, date) VALUE (DEFAULT, DEFAULT)',
  );

  return insertId;
};

const getAllSales = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.sales',
  );

  console.log('result', result);

  return result;
};

module.exports = {
  addNewSale,
  getAllSales,
};
