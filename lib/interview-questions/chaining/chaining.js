
'use strict';

class Chaining {
  constructor() {

  }

  // Write a function named count that, given an integer and an array of arrays, uses either filter, map, or reduce to count the amount of times the integer is present in the array of arrays.
  // Note: You might need to use the same method more than once.
  // For example, count(5, [[1, 3, 5, 7, 9], [5, 5, 5], [1, 2, 3]]) returns 4.

  count(target, input) {
    let counter = 0;
    input.map(item => item.map(value => {
      if(value === target)  {
        counter++;
      }
    }));
    return counter;
  }

  // Write a function that, given an array of integer arrays as input, calculates the total sum of all the elements in the array.
  // You may want to use filter, map, or reduce for this problem, but are not required to. You may need to use the same method more than once.
  // For example, [[1, 2, 3, 4, 5], [6, 7, 2, 4, 5, 7], [9, 2, 3, 6,]] returns 66.

  totalSum(input) {
    let sum = 0;
    input.map(item => item.map(value => {
      sum += value;
    }));
    return sum;
  }


  // Write a function named divisibleByFiveTwoToThePower that accepts an array of arrays as input.
  // This function should first remove any elements that are not numbers or are not divisible by five.
  // This function should then raise 2 to the power of the resulting numbers, returning an array of arrays.
  // For example, [ [0,2,5,4], [2,4,10], [] ] should return [ [1, 32], [1024], [] ]

  divisibleByFiveTwoToThePower(input) {
    let filteredArray = input.filter(value => (typeof value === 'number') || (value % 5 === 0) );
    console.log('filteredArray', filteredArray);
  // let newArray = [];
  // let powerArray = filteredArray.map(value => {
  //   [Math.pow(2, value)];
  // });
  // console.log('powerArray', powerArray);
  // newArray.push(powerArray);
  // console.log(newArray);
  // return newArray;
  }


  // Write a function named findMaleAndFemale that, given the Star Wars data, below,
  // returns the names of the characters whose gender is either male or female.
  // The names should be combined into a single string with each character name separated by "and".
  // For example, "C-3PO and Luke Skywalker".

  findMaleAndFemale(data)  {
    console.log(data);
  }


  // Write a function named findShortest that, given the Star Wars data from Challenge 6, uses any combination of filter, map and reduce to return the name of the shortest character.

  findShortest(data) {
    console.log(data);
  }

}

module.exports = Chaining;