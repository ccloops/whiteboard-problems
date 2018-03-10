'use strict';

// Assume that you have a binary search tree constructor available to you.
// First, implement insert on a binary search tree.
// Second, implement find on a binary search tree.

class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(node) {
    if(!(node instanceof BinarySearchTree))
      throw new Error ('node must be a BST');
    if(node.value === this.value)
      return;
    if(node.value < this.value) {
      if(!this.left) {
        this.left = node;
        return;
      }
      this.left.insert(node);
      return;
    }
    if(!this.right) {
      this.right = node;
      return;
    }
    this.right.insert(node);
  }
}