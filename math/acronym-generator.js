'use strict';

let testString = 'The Federal Bureau of Investigation';

const wordsIgnore = ['a', 'for', 'an', 'and', 'of', 'or', 'the', 'to', 'with'];

function acronynms(str) {
  if (!str) return null;
  let newArray = str.split(' ');
  let output = '';
  for (let i = 0; i < newArray.length; i++) {
    if (!wordsIgnore.includes(newArray[i].toLowerCase())) {
      console.log(newArray[i][0]);
      output += newArray[i][0];
    }
  }
  console.log(output);
  return output;
}

acronynms(testString);
