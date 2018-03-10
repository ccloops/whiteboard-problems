'use strict';

const arrayToTranspose = [
  [1,2,3],
  [1,2,3],
  [1,2,3],
];

const transposeArray = (array, arrayLength) => {
  let newArray = [];
  for(let i = 0; i < array.length; i++) {
    newArray.push([]);
  }

  for(let i = 0; i < array.length; i++) {
    for(let j = 0; j < array.length; j++) {
      newArray[j].push(array[i][j]);
    }
  }

  console.log(newArray);
  return newArray;
};


transposeArray(arrayToTranspose);