'use strict';

const Node = require('./node.js');

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    if(!this.head) {
      this.head = new Node(value);
      return;
    }

    let current = this.head;

    while(current.next) {
      current = current.next;
    }

    current.next = new Node(value);
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

module.exports = LinkedList;