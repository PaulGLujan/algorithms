// Reverse a singly linked list.
// Recursive approach
var reverseList = function(head) {
    if (!head || !head.next) return head;

    const out = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return out;
};

const test = {
    val: 1,
    next: {
        val: 2,
        next: { val: 3, next: { val: 4, next: { val: 5, next: null } } }
    }
};

console.log(JSON.stringify(reverseList(test)));
