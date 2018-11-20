'use strict';

const Node = require('./lib/node.js');

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

  prepend(value) {
    let node = new Node(value);
    node.next = this.head;
    this.head = node;
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

  findMiddle(list) {
    let fast = list.head;
    let slow = list.head;

    while (fast.next) {
      fast = list.head.next.next;
      slow = list.head.next;
    }
    return slow.value;
  }

  intersect(ll1, ll2) {
    let encountered = {};
    let result = new LinkedList();

    let current1 = ll1.head;

    while(current1) {
      encountered[current1.value] = true;
      current1 = current1.next;
    }

    let current2 = ll2.head;

    while(current2) {
      if(encountered[current2.value]) {
        result.append(new Node(current2.value));
      }
      current2 = current2.next;
    }

    return result;
  }
}

module.exports = LinkedList;