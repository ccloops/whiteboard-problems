'use strict';

const addTwo = (number) => {

  let arrOfNumbers = number.split(' ');
  let mappedArray = arrOfNumbers.map(number => {
    return parseInt(number) + 2;
  });
  return mappedArray.join(' ');
};


console.log(addTwo('0 1 2 3 4'));