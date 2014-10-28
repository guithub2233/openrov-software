var should = require('should');
var sinon = require('sinon');
var testee = require('../');


describe('lights plugin constructor', function() {
  beforeEach(function () {
    sinon.spy(console, 'log');
  });

  afterEach(function () {
    console.log.restore();
  });

  it('the lights calls console.log', function () {
    console.log.called.should.be.false;
    new testee('', undefined);
    console.log.called.should.be.true;
  });

  it('calls console.foo with right argument', function () {
    new testee('', undefined);
    console.log.calledOnce.should.be.true;
    console.log.firstCall.calledWith(sinon.match(/^This/)).should.be.ok;
  });
});