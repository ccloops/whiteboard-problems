'use strict';

// Implement a method to perform basic string compression using the counts of repeated characters. For example, the string aabcccccaaa would become a2b1c5a3. If the 'compressed' string would not become smaller than the original string, your method should return the original string.

const compressAString = (str) => {
  
  let compressedString = '';
  // let current = str[0];

  for(let i = 0; i < str.length; i++) {
    let counter = 0;
    // while(str[i] === str[i + 1]) {
    console.log(str[i]);
    counter++;
    console.log(counter);
    // }
    // if(str[i] !== str[i + 1]) {
    //   compressedString += str[i];
    // }
  }

  console.log(compressedString);

  // for(let i = 1; i < str.length; i++) {
  //   let counter = 0;
  //   if(current === str[i]) {
  //     current = str[i];
  //     counter++;
  //   }
  //   console.log(counter);
  // }

  // let newObject = {};

  // for(let i = 0; i < str.length; i++) {
  //   if(newObject[str[i]]) {
  //     newObject[str[i]] = 1;
  //   }
  //   newObject[str[i]] = 1;
  // } 

};

compressAString('aabcccccaaa');