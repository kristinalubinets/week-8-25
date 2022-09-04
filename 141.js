// 141. Linked List Cycle
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
//given head of ll
//determine if ll has a cycle
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {    
    let set = new Set;    
    let p = head;
    
    while(p !== null  ) {
        if(set.has(p)) {
            return true;
        } 
        set.add(p);
        p = p.next;    
    }
    return false;
};
/********************* we can use slow and fast pointer *****************/


 var hasCycle = function(head) {  
    if(head === null) return false
    
    let slow = head;
    let fast = head.next;
    
    while(slow != fast) {
        if(fast == null || fast.next == null) {
            return false;
        }
        slow = slow.next;
        fast = fast.next.next;        
    }
    return true;
};