'use strict';

const Node = require('./node');

class LinkedList {
  constructor() {
    this.head = null;
  }

  reverse() {
    let current = this.head;
    let prev = null;
    let next = null;

    while(current !== null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
  }
}