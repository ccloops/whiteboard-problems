'use strict';

const findMissingNumberMath = (array) => {

  let totalItems = 100;
  let firstNumber = 1;
  let lastNumber = 100;
  let totalExpectedSum = (totalItems / 2) * (firstNumber + lastNumber);

  let actualSum = array.reduce((acc, curr) => acc + curr);

  return totalExpectedSum - actualSum;
};

// big O(1) space
// big O(n) time

findMissingNumberMath();

const test = [...Array(99).keys()].map(x => ++x);

const findNumber = (array) => {
  const expectedSum = [...Array(100).keys()].map(x => ++ x).reduce((a, c) => a + c);

  const actualSum = array.reduce((a, c) => a + c);

  let missingNumber = expectedSum - actualSum;
  return missingNumber;
};

findNumber(test);