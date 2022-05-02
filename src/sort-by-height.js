const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let sortArr = [];

	for(let i = 0; i < arr.length; i++){
		console.log(typeof arr[i]);
		if(arr[i] !== -1){
			sortArr.push(arr[i]);
		}
	}
	sortArr = sortArr.sort((a,b) => a -b);

	for(let j = 0; j < arr.length; j++){
		if(arr[j] !== -1){
			arr[j] = sortArr[0];
			sortArr.shift();

		}
	}
	return arr;
}

module.exports = {
  sortByHeight
};
