const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if(typeof sampleActivity !== 'string'){
    return false;
  }

  let MODERN_ACTIVITY = +sampleActivity;
  if(isNaN(MODERN_ACTIVITY) || MODERN_ACTIVITY < 0){
    return false;
  }
  
	let HALF_LIFE_PERIOD = 5730;
  let INITIAL_ACTIVITY = 15;

	let k = 0.693 / HALF_LIFE_PERIOD;


	let age = Math.ceil(Math.log(INITIAL_ACTIVITY / MODERN_ACTIVITY) / k);
  if(age === Infinity || age < 0){
    return false;
  }
	return age;
}

module.exports = {
  dateSample
};
