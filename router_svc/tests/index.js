const forwarder = require('../forwarders/forwarder');
const sinon = require('sinon');
const fs = require('fs');
const expect = require('chai').expect
const request = require('request');

describe('Router service', () => {
  it('should correctly route requests to set domain', () => {
    const requestSpy = sinon.stub().callsFake(fs.createWriteStream('{}'))
    const store = forwarder('store', requestSpy);

    const req = {};
    const res = {};

    store(req, res)
    
  })
})