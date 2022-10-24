const sinon = require('sinon');
const chai = require('chai')
const { expect } = require('chai');

const productsController = require('../../../src/controllers/products.controller');
const allProducts = require('./mocks/all.products.json')
const chaiHttp = require('chai-http')
const app = require('../../../src/app')

chai.use(chaiHttp)

describe('Products controller unit tests', function() {
  it('should return all products for get(/products) method', async function () {
    const response = await chai
      .request(app)
      .get('/products')

    expect(response.status).to.be.equal(200)
    expect(response.body).to.be.deep.equal(allProducts)
  });
});

