const expect = require('chai').expect;
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', ()=>{
	describe('SUM', ()=>{
		it('sum of 1.4 and 4.5 should be 6', ()=>{
			expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
		});
	});
	describe('SUBTRACT', ()=>{
		it('the difference between 1.4 and 4.5 should be -4', () =>{
			expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
		});
	});
	describe('DIVIDE', ()=>{
		it('the division of 1.4 by 4.5 should be 0.2', () =>{
			expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
		});
	});
	describe('DIVIDE', ()=>{
		it('the division of 1.4 by 4.5 should be 0', () =>{
			expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
		});
	});
});