'use strict';

function loop_size(node){
  
  let ctr = new Set();
  let slow = node;
  let fast = node.next;
  
  while(slow !== fast) {
    slow = slow.next;
    fast = fast.next.next;
  }
  ctr.add(slow);
  slow = slow.next;
  while(slow !== fast){
    ctr.add(slow);
    slow = slow.next;
  }
  
  return ctr.size;
  
}

loop_size();