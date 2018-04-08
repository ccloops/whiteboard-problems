'use strict';

function isDivisible(n, x, y) {

  return n % x === 0  && n % y === 0 ? true : false;

}

isDivisible(3,1,3);