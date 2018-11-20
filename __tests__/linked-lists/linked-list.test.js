'use strict';

const LinkedList = require('../../lib/data-structures/linked-lists/singly/linked-list.js');

describe('LinkedList class methods', () => {
  it('append(value) method should append a value to the head of an empty Linked List', () => {
    let list = new LinkedList();
    list.append(8);
    console.log(list);

    expect(list.head.value).toEqual(8);
    expect(list.head.next).toBeNull();
  });
});