/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    //traverse the two lists
    let l1t = l1;
    let l2t = l2;
    let A1 = [];
    let A2 = [];
    while(l1.next !== null)
    {
        A1.push(l1.val);
        l1 = l1.next;        
    }
    A1.push(l1.val);
    while(l2.next !== null)
    {
        A2.push(l2.val);
        l2 = l2.next;        
    }
    A2.push(l2.val);
    let N1 = [];
    while(A1.length!==0 || A2.length !== 0){
        if (A1.length === 0){
            N1.push(A2.pop());
        }
        else if (A2.length === 0){
            N1.push(A1.pop());
        }
        else{
            let sum = A1.pop()+A2.pop();
            N1.push(sum);        
        }
    }
    //Fix 
    console.log(N1);
    
    for (i = 0; i < N1.length; i++)
    {
        console.log("here: " + N1[i]);
        if (N1[i] > 9){
            N1[i] = N1[i] % 10;
            console.log("now: "+ N1[i]);
            if (i+1 < N1.length)
            {
                N1[i+1] = N1[i+1] + 1;        
            }
            else{
                N1.push(1);
            }
        }
    }
    console.log(N1);
    let ln = new ListNode();
    let lns = ln;
    while (N1.length!=0){
        let lnew = new ListNode(N1.pop(), null);    
        ln.next = lnew;
        ln = ln.next;
    }
    return lns.next;
};
