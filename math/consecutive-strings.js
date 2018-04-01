'use strict';

function longestConsec(strarr, k) {
  
  let n = strarr.length;
  let concatenatedString = '';
  let concatenatedArray = [];
  
  if(n === 0 || k > n || k <= 0) {
    return '';
  }

  let spliced = strarr.splice(0, k);
  console.log(spliced);

  let newArray = strarr.splice(0, 1, strarr[1]);
  console.log(newArray);
  // console.log(strarr);

  for(let i = 0; i < strarr.length; i++) {
    let arrayPosition = strarr[i];
    // while (k > 0) {
    concatenatedString += arrayPosition;
    arrayPosition = strarr[i + 1];
    // k--;
    // }
    concatenatedArray.push(concatenatedString);
  }
  console.log(concatenatedArray);

}

longestConsec(['zone', 'abigail', 'theta', 'form', 'libe', 'zas'], 2);