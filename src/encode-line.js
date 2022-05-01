const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if(str === ''){
    return '';
  }
  let res = ['1' + str[0]];
	for(let char of str.slice(1)){
		let elementInStack = res.pop();
		if(elementInStack.slice(-1) === char){
			count = Number(elementInStack.slice(0, -1));
			count += 1;
			res.push(count + char);
		}else{
			res.push(elementInStack);
			res.push('1'+ char);
		}
	}
	return res.join('').replace(/1/g, '')
}

module.exports = {
  encodeLine
};
