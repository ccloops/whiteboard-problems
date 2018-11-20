/* eslint-disable no-unused-vars */

/**
 * IMPORTANT
 * This exercise has two parts: PART A (JavaScript) and PART B (React).
 * Please read the comments below carefully.
 * 
 * PREPARATION
 * 1. Please sign out of Repl.it before starting.
 * 2. Click the "Fork" button above - Repl.it will create an
 *    anonymous URL you can share with Formidable.
 */

/**
 * PART A: Formidable JavaScript Exercise
 * Using vanilla JavaScript only (no libraries), write code in the below
 * function bodies in this javascript file to complete the following exercises.
 * Each exercise defines the function signature you should use.
 * 
 * Feel free to test your functions in the bottom of the file. Tests are great!
 * Your solution will be judged based solely on the function implementations, though.
 *
*/


// A1. Character Frequency

/**
 * @description Calculates the character frequencies in a string.
 * - Only count English alphabetical characters (a..z).
 * - Ignore numbers, whitespace, and punctuation.
 * - Character count is case-insensitive ('A' and 'a' count toward the same character).
 *
 * @param {string} sentence  The string whose characters will be counted
 *
 * @returns {object} An object with keys being lowercase characters, and
 *                   values being the character counts.
 * @example
 *  charFreq('Ceres123');
 *  // returns { c: 1, e: 2, r: 1, s: 1 }
 */
function charFreq(sentence) {
  if (typeof sentence !== 'string') {
    return null;
  }

  const formatted = sentence.toLowerCase().split('');

  return formatted.reduce((characterCount, character) => {
    if (character.search(/[a-z]/) !== -1) {
      if (characterCount[character]) {
        characterCount[character]++;
      } else {
        characterCount[character] = 1;
      }
    }

    return characterCount;
  }, {});
}

charFreq('Ceres123');


// A2. Longest Increasing Sequence.

/**
 * @description Finds the longest increasing sequence from a given array of
 *  integers. 
 * - A "sequence" is defined as 2 or more neighboring array elements.
 * - A sequence is "increasing" when each value in the sequence is followed
 *   by a value that is greater than the previous value.
 * - An array can have multiple increasing sequences.
 * - An "increasing sequence" ends when either:
 *   - the next value is lesser than or equal to the value before it.
 *   - there is no next value (end of array).
 * - If there are multiple sequences of the same length: return the first one.
 * - If no increasing sequence is found: return an empty array.
 * - If the function argument is invalid (not an array of integers), return an empty array.
 * - Do not mutate the argument to the function.
 *
 * @param {number[]} arr  An array of integers
 *
 * @returns {number[]} The longest increasing sequence of `arr`
 *
 * @example
 *  longestIncrSequence();
 *  longestIncrSequence([1]);
 *  longestIncrSequence([1, 1]);
 *  // all return []
 * @example
 *  longestIncrSequence([3, 4, 1, 2]);
 *  // return [3, 4]
 * @example
 *  longestIncrSequence([3, 0, 2, 2, 5, -43, -1, 0, 11, 9, 10]);
 *  // returns [-43, -1, 0, 11]
 *
 */
function longestIncrSequence(arr) {

  if (!Array.isArray(arr)) {
    return [];
  }

  const currentSequence = [];
  let longestSequence = [];
  let previousValue = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'number') {
      return [];
    }

    const currentValue = arr[i];

    if (currentValue <= previousValue) {
      currentSequence.length = 0;
    }
    currentSequence.push(currentValue);
    previousValue = currentValue;

    if (currentSequence.length > longestSequence.length) {
      longestSequence = [...currentSequence];
    }
  }

  return longestSequence;

}

longestIncrSequence([3, 0, 2, 2, 5, -43, -1, 0, 11, 9, 10]);


