const sinon = require('sinon');
const chai = require('chai')
const { expect } = require('chai');

const productsController = require('../../../src/controllers/products.controller');
const allProducts = require('./mocks/products/all.products.json')
const chaiHttp = require('chai-http')
const app = require('../../../src/app')
const productSample = require('./mocks/products/product.id.1.json')

chai.use(chaiHttp)

describe('Products controller unit tests', function() {
  it('should return all products for get(/products) method', async function () {
    const response = await chai
      .request(app)
      .get('/products')

    expect(response.status).to.be.equal(200)
    expect(response.body).to.be.deep.equal(allProducts)
  });

  it('should return the expected product for get(/product/:id) method', async function () {
    const response = await chai
      .request(app)
      .get('/products/1')

    expect(response.status).to.be.equal(200)
    expect(response.body).to.be.deep.equal(productSample)
  })
});

