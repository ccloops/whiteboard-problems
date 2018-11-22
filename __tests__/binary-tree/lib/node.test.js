'use strict';

const Node = require('../../../lib/data-structures/binary-tree/lib/node.js');

describe('Binary Tree Node Class', () => {

  it('constructor()', () => {
    let node = new Node(3);
    expect(node.value).toEqual(3);
    expect(node.left).toBeNull();
    expect(node.right).toBeNull();
  });
});
