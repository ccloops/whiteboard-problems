'use strict';

const evenFibonacci = () => {
  let sequence = [1, 2];
  let sum = 0;

  function calculate(array) {
    return array[array.length - 1] + array[array.length - 2];
  }

  while (sequence[sequence.length - 1] < 4000000) {
    sequence.push(calculate(sequence));
  }

  sequence.forEach(function (n) {
    if (n % 2 === 0) {
      sum += n;
    }
  });
  console.log(sum);
  return sum;
};

evenFibonacci(); //  4613732

function fibonacciSum() {
  let param = 0;
  let current = fibonacci(param);
  let sum = current;
  while (current < 4000000) {
    param++;
    current = fibonacci(param);
    sum += current;
  }
  return sum;
}

function fibonacci(number) {
  if (number < 1)
    return 0;
  if (number <= 2)
    return 1;
  return fibonacci(number - 1) + fibonacci(number - 2);
}

fibonacciSum();


