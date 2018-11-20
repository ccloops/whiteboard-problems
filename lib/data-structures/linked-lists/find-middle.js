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

const findMiddle = list => {
  let fast = list;
  let slow = list;
  
  while(fast.next) {
    fast = list.next.next;
    slow = list.next;
  }

  return slow.value;
};

findMiddle(data);
