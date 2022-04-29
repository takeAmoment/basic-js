const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
let sum = 0;
function getSumOfDigits(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let str = n.toString();
	let arr = str.split('');

  sum = arr.reduce((prev, cur) => +prev + +cur, 0)
	if(sum > 9){
		return getSumOfDigits(sum)
	}
	return sum;
  
}

module.exports = {
  getSumOfDigits
};
