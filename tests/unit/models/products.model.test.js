const sinon = require('sinon');
const chai = require('chai')
const { expect } = require('chai');

const connection = require('../../../src/models/connection');
const productsModel = require('../../../src/models/products.model');
const allProducts = require('./read.all.products')
const productSample = require('./mocks/product.id.1.json')
const app = require('../../../src/app')

describe('Products model unit tests', function() {
  it('should return all products for get(/products) method', async function() {
    const response = await productsModel.getAllProducts();
    expect(response.status).to.be.equal(200);
    expect(response.body).to.deep.equal(allProducts)
  });

  it('should return the expected product for get(/product/:id) method', async function() {
    const response = await productsModel.findProductById(1)
    expect(response.status).to.be.equal(200)
    expect(response.body).to.deep.equal(productSample)
  })

  it('should return error message for get(/product/:id) method with invalid id', async function () {
    const response = await productsModel.findProductById(999)
    expect(response.status).to.be.equal(404)
    expect(response.body).to.be.deep.equal({ "message": "Product not found" })
  })
});
