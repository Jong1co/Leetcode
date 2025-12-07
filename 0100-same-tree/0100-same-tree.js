/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    try {
        preorder(p, q)
        return true;
    } catch(error) {
        return false
    }
};

function preorder(node1, node2){
    if(node1?.val !== node2?.val) throw new Error()
    if(!node1 || !node2) return null;
    preorder(node1.left, node2.left)
    preorder(node1.right, node2.right)
}