/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    let smallOrder = function (root1, root2) {
        if(root1 == null && root2 == null) return true;
        if(root1 == null) return false;
        if(root2 == null) return false;

        if(root1.val !== root2.val) return false;
        return smallOrder(root1.left, root2.right) && smallOrder(root1.right, root2.left);
    };
    return smallOrder(root.left, root.right);
};