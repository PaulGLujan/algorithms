/*
21. Merge Two Sorted Lists
Easy

Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
*/

/**
 * Definition for singly-linked list. */
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if (!l1 || !Object.keys(l1).length || !l1.val === null) l1 = null;
    if (!l2 || !Object.keys(l2).length || !l2.val === null) l2 = null;
    let head = new ListNode('foobar', null);
    const current = head;

    while ((l1 && l1.val !== null) || (l2 && l2.val !== null)) {
        if (!l2 || (l1 && l1.val < l2.val)) {
            head.next = l1;
            l1 = l1.next;
            head = head.next;
        } else {
            head.next = l2;
            l2 = l2.next;
            head = head.next;
        }
    }
    return current.next;
};

const l1 = { val: 1, next: { val: 2, next: { val: 4, next: null } } };
const l2 = { val: 1, next: { val: 3, next: { val: 4, next: null } } };

console.log(JSON.stringify(mergeTwoLists(l1, l2)));

const m1 = {
    val: 1,
    next: { val: 4, next: { val: 5, next: { val: 8, next: null } } }
};
const m2 = {
    val: 1,
    next: { val: 2, next: { val: 3, next: { val: 4, next: null } } }
};

console.log(JSON.stringify(mergeTwoLists(m1, m2)));

const n1 = { val: 0, next: null };
const n2 = {};

console.log(JSON.stringify(mergeTwoLists({}, n1)));

console.log(JSON.stringify(mergeTwoLists()));
