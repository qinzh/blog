/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function (root) {
  var result = [];
  function preOrder(root) {
    if (!root) {
      return;
    }
    result.push(root.val);
    root.children.forEach((item) => {
      preOrder(item);
    })
  }
  preOrder(root);
  return result
};