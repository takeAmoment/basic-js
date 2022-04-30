const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
let arr = [];
const chainMaker = {
  getLength() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return arr.length;
  },
  addLink(value) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    if(value === undefined && value !== null){
			arr.push('( )');
		} else{
			arr.push(`( ${value} )`);
		}
    return this;
  },
  removeLink(position) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    if(typeof position != 'number' || position % 1 != 0 || position <= 0 || position > arr.length){
			arr = []
      throw Error("You can\'t remove incorrect link!");
		}
		arr.splice(position - 1, 1);

    return this;
  },
  reverseChain() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    arr.reverse();
    return this;
  },
  finishChain() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let finalStr = arr.join('~~');
    arr = [];
    return finalStr;
    
  }
};

module.exports = {
  chainMaker
};
