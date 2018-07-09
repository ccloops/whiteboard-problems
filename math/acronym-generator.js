'use strict';

let testString = 'The Federal Bureau of Investigation';

const wordsIgnore = ['a', 'for', 'an', 'and', 'of', 'or', 'the', 'to', 'with'];

function acronynms(str) {
  if (!str) return null;
  let newArray = str.split(' ');
  let output = '';
  for (let word = 0; word < newArray.length; word++) {
    if (!wordsIgnore.includes(newArray[word].toLowerCase())) {
      console.log(newArray[word][0]);
      output += newArray[word][0];
    }
  }
  console.log(output);
  return output;
}

acronynms(testString);