/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  var result = [];
  function preOrder(root) {
    if (!root) {
      return;
    }
    result.push(root.val);
    preOrder(root.left);
    preOrder(root.right);
  }
  preOrder(root);
  return result;
};