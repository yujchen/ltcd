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
var inorderTraversal = function(root) {
    let value = [];
    let stack = [];
    let node = root;
    while (node != null || stack.length != 0)
    {
        if (node != null)
        {
            stack.push(node)
            node = node.left;
            continue;
        }
        node = stack.pop();
        value.push(node.val);
        node = node.right;
    }
    return value;
};

/*
//Trivial Solution: Recursive
var inorderTraversal = function(root) {
    let value = [];
    
    let inTra = function(node)
    {
        if (node === null) return;
        if (node.left !== null) inTra(node.left);
        value.push(node.val);
        if (node.right !== null) inTra(node.right);
    };
    
    inTra(root);
    return value;
};

*/
