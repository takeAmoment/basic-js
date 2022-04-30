const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let newArr = matrix[0].map((col,i) => matrix.map(row => row[i]));
  let sum = 0;
  for(let i = 0; i < newArr.length; i++ ){
    for(let j = 0; j < newArr[i].length; j++){
      if(newArr[i][j] === 0){
        break;
      } else{
        sum += newArr[i][j];
      }
    }
  }
  return sum;
}

module.exports = {
  getMatrixElementsSum
};
