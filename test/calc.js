var expect = require('chai').expect;
var calc = require('../lib/BarbellPlateCalc');

describe('barbell plate calculations', function() {

  it('should return correct number of plates', function() {
    expect( calc(45) ).to.deep.equal({});
    expect( calc(135) ).to.deep.equal({45: 1});
    expect( calc(140) ).to.deep.equal({45: 1, 2.5: 1});
    expect( calc(170) ).to.deep.equal({
      45: 1,
      10: 1,
      5: 1,
      2.5: 1
    });
    expect( calc(185) ).to.deep.equal({45: 1, 25: 1});
    expect( calc(405) ).to.deep.equal({45: 4});

    expect( calc(101) ).to.deep.equal({
      25: 1,
      2.5: 1,
      remainingWeight: 0.5
    });

    expect( function() { calc(0); } ).to.throw(Error);

  });
});
