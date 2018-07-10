'use strict';

// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

const isPrime = (value) => {
  for(let i = 2; i < value; i++) {
    if(value % i === 0) {
      return false;
    }
  }
  // console.log(value > 1);
  // console.log(value);
  // return value > 1;

  return true;
};

console.log(isPrime(8));


console.log(Math.sqrt(64));