'use strict';

function inAscOrder(arr) {
  let responseToReturn = true;
  
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] > arr[parseInt(i) + 1]) {
      responseToReturn = false;
    }
  }
  return responseToReturn;
}

inAscOrder([1, 6, 10, 18, 2, 4, 20]); // returns false;