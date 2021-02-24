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
 * @return {number[]}
 */
var getLonelyNodes = function(root) {
    let values = [];
    let node = root;
    let traverse = function(node)
    {
        if (node != null){
            checkLonely(node);
            if (node.left != null) traverse(node.left);
            if (node.right!= null) traverse(node.right);
        }        
    };
    let checkLonely = function(node)
    {
        if (node == null){
            return;
        }
        if (node.left != null && node.right == null){
            values.push(node.left.val);
        }
        if (node.left == null && node.right != null){
            values.push(node.right.val);
        }
    };
    traverse(root);
    return values;
};
