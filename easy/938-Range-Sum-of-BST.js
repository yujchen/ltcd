//Tags: Tree, BST

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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    let ans = 0;
    
    let dfs = function(node,L,H){
        if (node != null){
            if (node.val >= L && node.val <= H){
                ans+=node.val;
            } 
            if (node.left != null) dfs(node.left,L,H);
            if (node.right != null) dfs(node.right,L,H);
        }
    };
    
    dfs(root,low,high);
    
    return ans;
};




//Java Solution
/*
class Solution {
    int ans;
    public int rangeSumBST(TreeNode root, int L, int R) {
        ans = 0;
        dfs(root, L, R);
        return ans;
    }

    public void dfs(TreeNode node, int L, int R) {
        if (node != null) {
            if (L <= node.val && node.val <= R)
                ans += node.val;
            if (L < node.val)
                dfs(node.left, L, R);
            if (node.val < R)
                dfs(node.right, L, R);
        }
    }
}
*/
