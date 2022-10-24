const chai = require('chai')
const { expect } = require('chai');

const allSales = require('./mocks/sales/all.sales.json')
const chaiHttp = require('chai-http')
const app = require('../../../src/app')
const saleSample = require('./mocks/sales/sale.id.1.json')

chai.use(chaiHttp)

describe('Sales controller unit tests', function() {
  it('should return all sales for get(/sales) method', async function () {
    const response = await chai
      .request(app)
      .get('/sales')
  });

  it('should return the expected sales for get(/sales/:id) method', async function () {
    const response = await chai
      .request(app)
      .get('/sales/2')
  })
});
