'use strict';

const uniqueCharacters = (str) => {

  let newObject = {};

  for(let i = 0; i < str.length; i++) {
    if(newObject[str[i]]) {
      return false;
    }
    newObject[str[i]] = true;
  }
  return true;
};

console.log(uniqueCharacters('street'));