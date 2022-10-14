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
  console.log(productBody);

  const columns = Object.keys(productBody)
    .map((key) => `${key}`)
    .join(', ');

  const placeholders = Object.keys(productBody)
    .map(() => '?')
    .join(', ');

  console.log(columns);
  console.log(placeholders);

  const [{ insertId }] = await connection.execute(
    `INSERT INTO products (${columns}) VALUE (${placeholders})`,
    [...Object.values(productBody)],
  );
  console.log(insertId);
  return insertId;
};

module.exports = {
  getAllProducts,
  findProductById,
  addNewProduct,
};
