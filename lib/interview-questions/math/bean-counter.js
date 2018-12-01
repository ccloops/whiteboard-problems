// function countBs(str) {
//   let counter = 0;

//   for (let i = 0; i < str.length; i++) {
//     if (str.charAt(i) === 'B') {
//       counter++;
//     }
//   }
//   return counter;
// }

// console.log(countBs("BBC"));
// // → 2


function countChar(string, ch) {
  var counted = 0;
  for (var i = 0; i < string.length; i++)
    if (string.charAt(i) == ch)
      counted ++;
  return counted;
}

function countBs(string) {
  return countChar(string, 'B');
}

console.log(countBs('BBC'));
// → 2
console.log(countChar('kakkerlak', 'k'));
// → 4