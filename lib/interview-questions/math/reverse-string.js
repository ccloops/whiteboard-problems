'use strict';

const reverseStr = (str) => {
  let result = '';

  for(let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  console.log(result);
  return result;
};

reverseStr('bird');

const usingReverse = (str) => {
  console.log(str.split('').reverse().join(''));
  return str.split('').reverse().join('');

};
usingReverse('dog');