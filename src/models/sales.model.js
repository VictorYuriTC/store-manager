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
    `
    SELECT
      sale_id AS saleId,
      product_id AS productId,
      quantity,
      date
    FROM StoreManager.sales_products
    INNER JOIN StoreManager.sales
    ON sales.id = sales_products.sale_id
    ORDER BY sale_id ASC
    `,
  );

  return result;
};

const findSaleById = async (queriedId) => {
  const [result] = await connection.execute(
    `
    SELECT
      product_id AS productId,
      quantity,
      date
    FROM StoreManager.sales_products AS sales_p
    INNER JOIN StoreManager.sales AS sales
    ON sales_p.sale_id = sales.id
    WHERE sales_p.sale_id = ${queriedId}
    `,
  );

  return result;
};

module.exports = {
  addNewSale,
  getAllSales,
  findSaleById,
};
