'use strict';

class BinaryTree {
  constructor() {
    this.root = null;
  }

  preOrderTraversal() {
    let results = [];

    let _walk = (node) => {
      results.push(node);
      if(this.left) _walk(node.left);
      if(this.right) _walk(node.right);
    };
    _walk(this.root);

    return results;
  }
}

module.exports = BinaryTree;