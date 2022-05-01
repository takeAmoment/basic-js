const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let arr = [];
	let additionArr;
	let additionStr;gitt
	let resultStr;
  let separator = options.separator;
	let repeatTimes = options.repeatTimes;
	let addition = options.addition;
	let additionRepeatTimes = options.additionRepeatTimes;
	let additionSeparator = options.additionSeparator;
	if(!separator){
		separator = '+';
	}
	if(!additionSeparator){
		additionSeparator = '|';
	}


	/*------ADDITION-------*/
	if(addition !== undefined){
		additionArr = [];
    if(addition == null) addition = 'null';
		if(additionRepeatTimes){
			let  i = 0;
			while(i < additionRepeatTimes){
				additionArr.push(addition);
				i++;
			}
		} else {
      additionArr.push(addition);
    }
		additionStr = additionArr.join(`${additionSeparator}`);
	} else{
		additionStr = '';
	}
	/*-------------STR---------*/
	let newStr = str + additionStr;
	if(repeatTimes){
		let j = 0;
		while(j < repeatTimes){
			arr.push(newStr);
			j++;
		}
	} else{
		arr.push(newStr);
	}

	resultStr = arr.join(`${separator}`);

  return resultStr;
s
}

module.exports = {
  repeater
};
