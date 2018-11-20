'use strict';

const Node = require('../../lib/data-structures/binary-tree/lib/node.js');
const BinaryTree = require('../../lib/data-structures/binary-tree/binary-tree.js');

describe('BinaryTree class methods', () => {
  let tree = new BinaryTree();
  let one = new Node(1);
  let two = new Node(2);
  let three = new Node(3);
  let four = new Node(4);
  let five = new Node(5);
  let six = new Node(6);
  let seven = new Node(7);
  let eight = new Node(8);
  let nine = new Node(9);

  tree.root = six;
  six.left = two;
  six.right = seven;
  two.left = one;
  two.right = four;
  four.left = three;
  four.right = five;
  seven.right = nine;
  nine.left = eight;

  it('preOrderTraversal() method should return an array of node values traversed pre-order', () => {
    expect(tree.preOrderTraversal(tree.root)).toEqual([6, 2, 1, 4, 3, 5, 7, 9, 8]);
  });

  it('inOrderTraversal() method should return an array of node values traversed in-order', () => {
    expect(tree.inOrderTraversal(tree.root)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});