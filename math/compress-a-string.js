'use strict';

const compressAString = (string) => {
  if(string.length < 3) return string;

  let compressedString = '';


  let previousCharacter = string.charAt(0);
  let counter = 1;

  for(let i = 1; i < string.length; i++) {
    if(string[i] !== previousCharacter) {
      compressedString += previousCharacter + counter;
      previousCharacter = string[i];
      counter = 1;
    } else {
      counter++;
    }
  }
  
  compressedString += previousCharacter + counter;
  console.log(compressedString.length >= string.length ? string : compressedString);

  return compressedString.length >= string.length ? string : compressedString;

};


compressAString('aabcccaaaabb'); //a2b1c3a4b2