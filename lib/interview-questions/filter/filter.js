'use strict';

class Filter {
  constructor() {

  }

  // Write a function named oddValues that, given an array of integers as input, uses filter to return an array containing only the odd integers.
  // For example, oddValues([1,2,3]) returns [1,3].

  oddValues(arr){
    return arr.filter(value => value % 2 !== 0);
  }

  // Write a function named filterStringsWithVowels that, given an array of strings as input, uses filter to return an array with only words that contain vowels.
  // The callback function to filter should include or utilize a regular expression pattern.
  // For example, filterStringsWithVowels('gregor','hound','xyz') returns ['gregor', 'hound'].

  filterStringsWithVowels(arr) {
    let vowels = /[a|e|i|o|u]/;
    return arr.filter(word => word.match(vowels));
  }

  // Write a function named notInFirstArray that, given two arrays as input, uses filter to return an array of all the elements in the second array that are not included in the first array.
  // For example, notInFirstArray([1,2,3], [1,2,3,4]) returns [4].

  notInFirstArray(forbiddenValues, arr) {
    return arr.filter(value => !forbiddenValues.includes(value));
  } 

  // Write a function named getBaseStatGreaterThan that, given the snorlaxData, below, and an integer as input, uses filter to return an array containing all stats with a baseStat greater than the integer.
  // For example, getBaseStatGreaterThan(snorlaxData.stats, 50) will return an array containing the 'special-defense' and 'special-attack' objects.

  getBaseStatGreaterThan(arr, minBaseStat) {
    return  arr.filter(item => item.baseStat > minBaseStat);
  }

  // Write a function named getStatName that is an extension of your getBaseStatGreaterThan function from challenge 4. For this function, extend your solution from challenge 4 to only return the name of the stat, rather than the entire stat object.
  // For example, getStatName(snorlaxData.stats, 50) will return ['special-defense', 'special-attack'].

  getStatName(arr, minBaseStat) {
    return arr.filter(item => item.baseStat > minBaseStat)
      .map(item => item.stat.name);
  }

  // Write a function named getCharactersWithoutChildren that, given the array of characters, below, uses filter to return an array of all characters without children.

  getCharactersWithoutChildren(arr) {
    return arr.filter(item => !item.children);
  }

  // Write a function named evenOddNumericValues that, given an array as input, uses filter to remove any non-numeric values, then uses map to generate a new array containing the string 'even' or 'odd', depending on the original value.
  // For example: evenOddNumericValues(['Gregor', 2, 4, 1]) returns ['even', 'even', 'odd'].

  evenOddNumericValues(arr) { 
    return arr.filter(value => typeof value === 'number')
      .map(value => value % 2 === 0 ? 'even' : 'odd');
  }
}

module.exports = Filter;