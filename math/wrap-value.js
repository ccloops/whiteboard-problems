function wrapValue(n) {
  var localVariable = n;
  return function () { return localVariable; };
}

var wrap1 = wrapValue(1);
var wrap2 = wrapValue(2);
console.log(wrap1());
console.log(wrap2());

// Being able to reference a specific instance of local variables in
// an enclosing function is called closure. A function that 'closes over'
// some local variables ic called a closure.

function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

var twice = multiplier(2);
console.log(twice(5));


function power(base, exponent) {
  if(exponent === 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
}

console.log(power(2, 3));