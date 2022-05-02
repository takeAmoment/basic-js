const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let arr = email.split('');
	let index = 0;
	for(let  i = 0; i < arr.length; i++){
		if(arr[i] === '@'){
			index = i + 1;
		}
	}
	return arr.slice(index).join('');
}

module.exports = {
  getEmailDomain
};
