'use strict';

function longestConsec(strarr, k) {
  
  let n = strarr.length;
  let concatenatedArray = [];
  
  if(n === 0 || k > n || k <= 0) {
    return '';
  }

  let longestString = '';
  if(k === 1) {
    for(let i = 0; i < n; i++) {
      if(longestString.length < strarr[i].length) {
        longestString = strarr[i];
      }
    }
  } 
  
  else {
    
    for(let i = 0; i < strarr.length; i++) {
      let spliced = strarr.splice(0, k);
      console.log('spliced', spliced);
      let concatSpliced = spliced.join('');
      console.log('concatspliced ', concatSpliced);
      concatenatedArray.push(concatSpliced);
      console.log(concatenatedArray);
    }

    
    for(let i = 0; i < concatenatedArray.length; i++) {
      if(longestString.length < concatenatedArray[i].length) {
        longestString = concatenatedArray[i];
      }
    }
  } 
  console.log('longest string', longestString);
  return longestString;
}

longestConsec(['it','wkppv','ixoyx', '3452', 'zzzzzzzzzzzz'], 3);