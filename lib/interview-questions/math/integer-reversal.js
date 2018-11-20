'use strict';

// integer reversal - you cannot use a string at all you must only use integers
// given an integer, return an integer that is the reverse ordering of numbers

const reverseInt = (n) => {
  let reversed = 0;

  while(n !== 0) {
    reversed = (reversed * 10) + (n % 10);
    n = Math.floor(n / 10);
  }
  console.log(reversed);
  return reversed;
};

reverseInt(459);