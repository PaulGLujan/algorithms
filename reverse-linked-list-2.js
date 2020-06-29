// Reverse a singly linked list.
// Iterative Approach
var reverseList = function(head) {
    let curr = head;
    let prev = null;
    let tempNext;

    while (curr) {
        tempNext = curr.next; // 2,3 // 3 // null
        curr.next = prev; // 1 // 2,1 // 3,2,1
        prev = curr; // 1 // 2,1 // 3,2,1
        curr = tempNext; // 2,3 // 3 // null
    }

    return prev;
};

const test = {
    val: 1,
    next: {
        val: 2,
        next: { val: 3, next: { val: 4, next: { val: 5, next: null } } }
    }
};

console.log(JSON.stringify(reverseList(test)));
console.log(JSON.stringify(reverseList(null)));
