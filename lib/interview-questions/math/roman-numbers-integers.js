'use strict';

function toRoman(num) {
  var result = '';
  var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  for(var i = 0; i <= decimal.length; i++) {
    while(num % decimal[i] < num) {
      result += roman[i];
      num -= decimal[i];
    }
  }
  console.log(result);
  return result;
}

toRoman(25);


function romanNumerals(str) {

  let romanKey = {
    'M': 1000,
    'CM': 900,
    'D': 500,
    'CD': 400,
    'C': 100,
    'XC': 90,
    'L': 50,
    'XL': 40,
    'X': 10,
    'IX': 9,
    'V': 5,
    'IV': 4,
    'I': 1,
  };

  let output = 0;

  for(let key in romanKey) {

    for(let i = 0; i < str.length; i++) {

      if(str === key) {
        console.log(romanKey[key]);
        output += romanKey[key];

      }
    }
    // if(romanKey.hasOwnProperty(key)) {
    //   console.log(key + ' -> ' + romanKey[key]);
    // }
  }

  console.log(output);

  return output;


}

romanNumerals('LXI');

function fromRoman(str) {
  var result = 0;
  var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  for(var i = 0; i <= decimal.length; i++) {
    while(str.indexOf(roman[i]) === 0) {
      console.log(str.indexOf(roman[i]));
      result += decimal[i];
      str = str.replace(roman[i], '');
      console.log('str',str);
    }
  }
  console.log(result);
  return result;
}

fromRoman('LIX');