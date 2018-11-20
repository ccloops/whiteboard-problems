'use strict';

const LinkedList = require('../../lib/data-structures/linked-lists/singly/linked-list.js');

describe('LinkedList class methods', () => {
  it('append(value) method should append a value to the head of an empty Linked List', () => {
    let list = new LinkedList();
    list.append(1);

    expect(list.head.value).toEqual(1);
    expect(list.head.next).toBeNull();
  });

  it('append(value) method should append a value to a Linked List that is not empty', () => {
    let list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);

    expect(list.head.value).toEqual(1);
    expect(list.head.next.value).toEqual(2);
    expect(list.head.next.next.value).toEqual(3);
    expect(list.head.next.next.next.value).toEqual(4);
    expect(list.head.next.next.next.next).toBeNull();
  });

  it('prepend(value) method should prepend a value to the head of an empty Linked List', () => {
    let list = new LinkedList();
    list.prepend(1);

    expect(list.head.value).toEqual(1);
    expect(list.head.next).toBeNull();
  });

  it('prepend(value) method should prepend a value to a Linked List that is not empty', () => {
    let list = new LinkedList();
    list.prepend(1);
    list.prepend(2);
    list.prepend(3);
    list.prepend(4);

    expect(list.head.value).toEqual(4);
    expect(list.head.next.value).toEqual(3);
    expect(list.head.next.next.value).toEqual(2);
    expect(list.head.next.next.next.value).toEqual(1);
    expect(list.head.next.next.next.next).toBeNull();
  });

  it('reverse() method should reverse a Linked List', () => {
    let list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    list.reverse();
    expect(list.head.value).toEqual(4);
    expect(list.head.next.value).toEqual(3);
    expect(list.head.next.next.value).toEqual(2);
    expect(list.head.next.next.next.value).toEqual(1);
    expect(list.head.next.next.next.next).toBeNull(); 
  });

  it('intersect(ll1, ll2) should intersect a linked list', () => {
    let list = new LinkedList();
    let ll1 = new LinkedList();
    let ll2 = new LinkedList();
    ll1.append(3);
    ll1.append(4);
    ll1.append(5);

    ll2.append(3);
    ll2.append(4);
    ll2.append(6);

    expect(list.intersect(ll1, ll2).head.value.value).toEqual(3);
    expect(list.intersect(ll1, ll2).head.next.value.value).toEqual(4);
  });
});