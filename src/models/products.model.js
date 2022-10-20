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

module.exports = {
  getAllProducts,
  findProductById,
  addNewProduct,
};
