'use strict';

const zigZag = array => {
  const sorted = array.sort();
  const output = [];
  while (sorted.length) {
    console.log('sorted: ', sorted);
    console.log('output: ', output);
    output.push(sorted.shift());
    output.push(sorted.pop());
  }
  console.log(output);
  return output;
};

zigZag([7, 2, 1, 4, 5 ]);

// n * log(n)