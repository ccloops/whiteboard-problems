'use strict';

// The function findDigit takes two numbers as input, num and nth. It outputs the nth digit of num (counting from right to left).

// #Note

// If num is negative, ignore its sign and treat it as a positive value.
// If nth is not positive, return -1.
// Keep in mind that 42 = 00042. This means that findDigit(42, 5) would return 0.

let findDigit = function(num, nth){
  let numberToReturn = 0;
  if(nth < 0) {
    numberToReturn = -1;
  }

  return numberToReturn;

};


findDigit(5673, 4);     // returns 5