const fs = require('fs').promises
const { join } = require('path')

const readAllProducts = async () => {
  const path = '/tests/unit/models/mocks/all.products.json'

  try {
    const contentFile = await fs.readFile(join(__dirname, path), 'utf-8')
    return JSON.parse(contentFile)
  } catch (error) {
    return null;
  }
}

module.exports = {
  readAllProducts
}
