const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let transformedArr = [];
  let removeArr = [];
  if(!Array.isArray(arr)){
    throw Error `'arr' parameter must be an instance of the Array!`;
  }

	for(let i = 0; i < arr.length; i++){
		switch (arr[i]) {
			case '--discard-next':
        removeArr.push(arr[i+1]);
				i+=1;
				break;
			case '--discard-prev':
        if(!removeArr.includes(arr[i-1])){
					transformedArr.pop(arr[i - 1]);
				}
				break;
			case '--double-next':
        if(i < arr.length - 1){
          transformedArr.push(arr[i+1]);
        }
					
		  	break;
			case '--double-prev':
        if(i > 0 && !removeArr.includes(arr[i-1])){
          transformedArr.push(arr[i-1]);
        }
				break;

			default:
				transformedArr.push(arr[i]);
		}
	}
	return transformedArr;
}

module.exports = {
  transform
};
