const chai = require('chai').expect;
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment.js');
const chai = require('chai');
const Utils = require('./utils.js');


describe('sendPaymentRequestToApi', () => {
    let consoleSpy;
  
    beforeEach(() => {
      consoleSpy = sinon.spy(console, 'log');
    });
  
    afterEach(() => {
      expect(consoleSpy.calledOnce).to.be.true;
      consoleSpy.restore();
    });
  
    it('should verify console.log prints 120 after adding 100 and 20', () => {
      sendPaymentRequestToApi(100, 20);
      expect(consoleSpy.calledWith('The total is: 120')).to.be.true;
    });
  
    it('should verify console.log prints 20 after adding 10 and 10', () => {
      sendPaymentRequestToApi(10, 10);
      expect(consoleSpy.calledWith('The total is: 20')).to.be.true;
    });
  });