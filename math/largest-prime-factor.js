const isPrime = (value) => {
  for(let i = 2; i < value; i++) {
    if(value % i === 0) {
      return false;
    }
  }
  // console.log(value > 1);
  // console.log(value);
  // return value > 1;

  return true;
};

console.log(isPrime(8));