'use strict';

class BinaryTree {
  constructor() {
    this.root = null;
  }

  preOrderTraversal() {
    let results = [];

    let _walk = (node) => {
      results.push(node.value);
      if(node.left) _walk(node.left);
      if(node.right) _walk(node.right);
    };
    _walk(this.root);

    console.log(results);
    return results;
  }
}

module.exports = BinaryTree;