'use strict';

const Node = require('../../../lib/data-structures/linked-lists/singly/lib/node.js');

describe('Linked List Node Class', () => {

  it('constructor()', () => {
    let node = new Node(3);
    expect(node.value).toEqual(3);
    expect(node.next).toBeNull();
  });

});
