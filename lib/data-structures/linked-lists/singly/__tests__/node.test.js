'use strict';

const Node = require('../node');

describe('Node', () => {

  it('constructor()', () => {
    let value = 'a value';
    let node = new Node(value);
    expect(node.value).toEqual(value);
    expect(node.next).toBeNull();
  });

});
