'use strict';

class MapFunctions {
  constructor() {

  }

  // Write a function named forLoopTwoToThe that, given an array of integers as input, iterates over the array and returns a new array. The returned array should contain the result of raising 2 to the power of the original input element.
  // You may choose to complete this challenge using a for loop, for...in syntax, or for...of syntax.
  // For example, twoToThe([1,2,3]) returns [2,4,8] because 2 ^ 1 = 2, 2 ^ 2 = 4, and 2 ^ 3 = 8.

  forLoopTwoToThe(arr) {
    let results = [];
    for(let number of arr) 
      results.push(Math.pow(2, number));
    return results;
  }

  // Write a function named forEachTwoToThe that produces the same output as your forLoopTwoToThe function from challenge 1, but uses forEach instead of a for loop.

  forEachTwoToThe(arr) {
    let results = [];
    arr.forEach(number => results.push(Math.pow(2, number)));
    return results;
  }

  // Write a function named mapTwoToThe that produces the same output as your forLoopTwoToThe function from challenge 1 and your forEachTwoToThe function from challenge 2, but uses map instead of a for loop or forEach.

  mapTwoToThe(arr) {
    return arr.map(number => Math.pow(2, number));
  }

  // Write a function named charCode that, given an array of letters as an input, uses map to return a new array where each element is the result of the `charCodeAt` method on the original array element.
  // Read the MDN documentation on String.charCodeAt() if necessary.
  // For example: charCode(['h','i']) returns [104, 105].

  charCode(arr) {
    return arr.map(letter => letter.charCodeAt(0));
  }

  // Write a function that, given an array of numbers as input, uses map to return a new array where each element is either the string "even" or the string "odd", based on each value.
  // If any element in the array is not a number, the resulting array should have the string "N/A" in its place.
  // For example: evenOdd([1,2,3]) returns ['odd','even','odd']

  evenOdd(arr) {
    return arr.map(item => {
      if(isNaN(item)) return'N/A';
      else if (item % 2 === 0) return 'even';
      else return 'odd';
    });
  }


  // Use the snorlaxAbilities data, below, for this challenge.
  // Write a function named extractAbilities that, given the array of abilities, uses map to create an array containing only the ability name.
  // Note: Because this function is expecting the array of abilities, it will be invoked as:
  // extractAbilities(snorlaxAbilities.abilities)

  extractAbilities(arr) {
    return arr.map(item => item.ability.name);
  }


  // Use the snorlaxStats data, below, for this challenge.
  // Write a function named extractStats that, given an array of stats, uses map to return an array of objects containing the stat name and the total.
  // The total should be the sum of the effort and the baseStat.
  // Here is an example of a single array element: { name: 'speed', total: 35 }


  extractStats(arr) {
    return arr.map(item => {
      let statsTotal = item.effort + item.baseStat;
      return {name: item.stat.name, total: statsTotal};
    });
  }
}

module.exports = MapFunctions;