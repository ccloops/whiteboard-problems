'use strict';

// The function findDigit takes two numbers as input, num and nth. It outputs the nth digit of num (counting from right to left).

// #Note

// If num is negative, ignore its sign and treat it as a positive value.
// If nth is not positive, return -1.
// Keep in mind that 42 = 00042. This means that findDigit(42, 5) would return 0.

let findDigit = function(num, nth){
  let numberToReturn = 0;
  if(nth <= 0) {
    numberToReturn = -1;
  }

  if(num < 0) {
    num = num * -1;
  }

  let numberArray = num.toString().split('').reverse();

  for(let i = 0; i < numberArray.length; i++) {
    if((nth - 1) === i) {
      numberToReturn = parseInt(numberArray[i]);
    }
  }
  return numberToReturn;

};


// findDigit(5673, 4);     // returns 5

findDigit(65, 0); // returns -1 