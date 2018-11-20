'use strict';

let data = {
  value: 3,
  next: {
    value: 8,
    next: {
      value: 11,
      next: null,
    },
  },
};

const traverseOne = list => {
  while(list) {
    console.log(list.value);
    list = list.next;
  }
};

traverseOne(data);

const traverseTwo = list => {
  if(!list) return;
  console.log(list.value);
  traverseTwo(list.next);
};

traverseTwo(data);