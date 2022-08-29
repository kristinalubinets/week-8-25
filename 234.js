//234. Palindrome Linked List - naive solution
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var isPalindrome = function(head) {
    
    let storage = [];
    let ptr = head;
    
    while(ptr !== null) {
        storage.push(ptr.val);   //could use unshift(), but it slows down the code
        ptr = ptr.next;
    }
    storage = storage.reverse();
    
    for(let i = 0; i < storage.length; i++) {
        if(storage[i] !== head.val) {
            return false;
        }
        head = head.next;
    }
    return true;
};