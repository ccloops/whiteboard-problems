'use strict';

// Given an integer, take the (mean) average of each pair of consecutive digits. Repeat this process until you have a single integer, then return that integer. e.g.

// digitsAverage(246)
// average of 2 and 4 is 3, average of 4 and 6 is 5
// so after first iteration 246 => 35
// average of 3 and 5 is 4
// so digitsAverage(246) returns 4
// If the average of two digits is not an integer, round the result up. e.g.

// digitsAverage(89)
// average of 8 and 9 is 8.5 ==> return 9
// p.s. for a bigger challenge, check out the one line version of this kata by myjinxin2015!

function digitsAverage(input) {
  let inputString = input.toString();
  let arrayOfStringValues = inputString.split('');
  // console.log(arrayOfStringValues);

  let arrayToCheck = '';
  for(let i = 0; i < arrayOfStringValues.length; i++) {
    if(arrayOfStringValues[i] && arrayOfStringValues[i + 1]) {

      let averageOfFirstTwo = (parseInt(arrayOfStringValues[i]) + parseInt(arrayOfStringValues[i + 1])) / 2;
      arrayToCheck += averageOfFirstTwo;
      console.log('averageOfFirstTwo', averageOfFirstTwo);
      console.log('array To check', arrayToCheck);
      console.log(typeof(arrayToCheck));
      return digitsAverage(parseInt(arrayToCheck));
    }
  }
}

digitsAverage(246);
