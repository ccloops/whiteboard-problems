'use strict';

// Implement a method to perform basic string compression using the counts of repeated characters. For example, the string aabcccccaaa would become a2b1c5a3. If the 'compressed' string would not become smaller than the original string, your method should return the original string.

const compressAString = (str) => {
  
  let compressedString = '';

  for(let i = 0; i < str.length; i++) {
    let counter = 0;
    console.log(str[i]);
    counter++;
    console.log(counter);


  console.log(compressedString);

};

compressAString('aabcccccaaa');