const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', ()=>{
	describe('SUM', ()=>{
		it('sum of 1.4 and 4.5 should be 6', ()=>{
			assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
		});
	});
	describe('SUBTRACT', ()=>{
		it('the difference between 1.4 and 4.5 should be -4', () =>{
			assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
		});
	});
	describe('DIVIDE', ()=>{
		it('the division of 1.4 by 4.5 should be 0.2', () =>{
			assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
		});
	});
	describe('DIVIDE', ()=>{
		it('the division of 1.4 by 4.5 should be 0', () =>{
			assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
		});
	});
});