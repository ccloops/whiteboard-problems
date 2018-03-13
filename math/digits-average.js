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
  let average;
  let arrayOfStrings = ('' + input).split(''); // ['2', '4', '6']
  if(arrayOfStrings.length === 1) {
    average = parseInt(arrayOfStrings[0]);
  }
  if(arrayOfStrings.length === 2) {
    let value1 = parseInt(arrayOfStrings[0]);
    let value2 = parseInt(arrayOfStrings[1]);
    average = Math.ceil((value1 + value2) / 2);
  }
  let parsedArray;
  if(arrayOfStrings.length > 2) {
    parsedArray = arrayOfStrings.map(x => parseInt(x));
    average = Math.ceil(parsedArray.reduce((acc, curr) => (acc + curr) / 2));
  }
  console.log(average);
  return average;
}
digitsAverage(246);







