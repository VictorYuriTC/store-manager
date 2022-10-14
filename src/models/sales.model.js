const { connection } = require('./connection');

const addNewSale = async (saleBody) => {
    const columns = Object.keys(saleBody)
    .map((key) => `${key}`)
    .join(', ');

  const placeholders = Object.keys(saleBody)
    .map(() => '?')
    .join(', ');

  const [[insertId]] = connection.execute(
    `INSERT INTO (${columns}) VALUE (${placeholders})`,
    [...Object.values(saleBody)],
  );
};

module.exports = {
  addNewSale,
};
