// function printFarmInventory(cows, chickens) {
//   var cowString = String(cows);
//   while (cowString.length < 3) {
//     cowString = '0' + cowString;
//   }
//   console.log(cowString + ' Cows');
//   var chickenString = String(chickens);
//   while (chickenString.length < 3)
//     chickenString = '0' + chickenString;
//   console.log(chickenString + ' Chickens');
// }
// printFarmInventory(7, 11);


// function printZeroPaddedWithLabel(number, label) {
//   var numberString = String(number);
//   while(numberString.length < 3)
//     numberString = '0' + numberString;
//   console.log(numberString + ' ' + label );
// }

// function printFarmInventory(cows, chickens, pigs) {
//   printZeroPaddedWithLabel(cows, 'Cows');
//   printZeroPaddedWithLabel(chickens, 'Chickens');
//   printZeroPaddedWithLabel(pigs, 'Pigs');
// }

// printFarmInventory(7, 11, 3);

function zeroPad(number, width) {
  var string = String(number);
  while(string.length < width)
    string = '0' + string;
  return string;
}

function printFarmInventory(cows, chickens, pigs) {
  console.log(zeroPad(cows, 3) + ' Cows');
  console.log(zeroPad(chickens, 3) + ' Chickens');
  console.log(zeroPad(pigs, 3) + ' Pigs');
}

printFarmInventory(7, 16, 3);


// A pure function is a specific kind of value-producing function that not only has no side effects but also doesn't rely on side effects from other code -- for example, it doesn't read global values that are occasionally changed by other code. A pure function has the pleasant property that, when called with the same arguments, it always produces the same value ( and doesn't do anything else ). This makes it easy to reason about.