'use strict';

// validate a binary search tree - make sure every node to the left or right of root is less than the root or greater than the root and every node that is a child of another node is less or greater than that node depending on if it is the nodes left or right value

class TreeNode {
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  validate() {
    return this._validate(this.root);
  }
  _validate(node) {
    if(!node) {
      return true;
    } else if(node.left && left.left.value > this.value) {
      return false;
    } else if(node.right && left.right.value < this.value) {
      return false;
    }
    return this._validate(this.left) && this._validate(this.right);
  }
}