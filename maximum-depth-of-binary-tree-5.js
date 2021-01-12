var maxDepth = function (root) {
    if (!root) return 0;
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

const asymmetricTree = {
    val: 3,
    left: { val: 9, left: null, right: null },
    right: {
        val: 20,
        left: { val: 15, left: null, right: null },
        right: { val: 7, left: null, right: null },
    },
};

const symmetricTree = {
    val: 4,
    left: {
        val: 2,
        left: { val: 1, left: null, right: null },
        right: { val: 3, left: null, right: null },
    },
    right: {
        val: 7,
        left: { val: 6, left: null, right: null },
        right: { val: 9, left: null, right: null },
    },
};

const treeWithoutExplicitEmpties = {
    val: 1,
    left: { val: 1, left: null, right: null },
};

const emptyRoot = {
    val: 0,
    left: null,
    right: null,
};

const noRoot = null;

console.log('#', maxDepth(asymmetricTree), '3', '\n');
console.log('#', maxDepth(symmetricTree), '3', '\n');
console.log('#', maxDepth(treeWithoutExplicitEmpties), '2', '\n');
console.log('#', maxDepth(emptyRoot), '1', '\n');
console.log('#', maxDepth(noRoot), '0', '\n');
