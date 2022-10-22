const { connection } = require('./connection');

const getAllProducts = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM products',
  );
  return result;
};

const findProductById = async (productId) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM products WHERE id = ?',
    [productId],
  );

  return result;
};

const addNewProduct = async (productBody) => {
  const columns = Object.keys(productBody)
    .map((key) => `${key}`)
    .join(', ');

  const placeholders = Object.keys(productBody)
    .map(() => '?')
    .join(', ');

  const [{ insertId }] = await connection.execute(
    `INSERT INTO products (${columns}) VALUE (${placeholders})`,
    [...Object.values(productBody)],
  );

  return insertId;
};

const updateProductById = async (productId, productName) => {
  const [{ insertId }] = await connection.execute(
    `
      UPDATE products
      SET name = ?
      WHERE id = ?
    `, [productName, productId],
  );

  return insertId;
};

const deleteProductById = async (productId) => {
  const [{ insertId }] = await connection.execute(
    `
      DELETE FROM products
      WHERE id = ?
    `, [productId],
  );

  return insertId;
};

module.exports = {
  getAllProducts,
  findProductById,
  addNewProduct,
  updateProductById,
  deleteProductById,
};
