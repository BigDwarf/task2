const { arrayShift, shiftLeft, shiftRight, isShiftable } = require("../index");
let expect = require('chai').expect;

expect(shiftLeft([4, 4, 4, 8])).to.deep.equal([8, 4, 8]);
expect(shiftRight([4, 4, 4, 8])).to.deep.equal([4, 8, 8]);
expect(shiftLeft([1, 2, 4, 8])).to.deep.equal([1, 2, 4, 8]);
expect(shiftRight([1, 2, 4, 8])).to.deep.equal([1, 2, 4, 8]);
expect(shiftRight([2, 2, 2, 4])).to.deep.equal([2, 4, 4]);
expect(isShiftable([1, 2, 4, 8])).to.equal(false);
expect(isShiftable([2, 2, 1, 4])).to.equal(true);
expect(isShiftable([2, 2, 1, 4, 4])).to.equal(true);