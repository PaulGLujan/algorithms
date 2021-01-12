// Iterative Approach
var invertTree = function (root) {
    if (!root) return root;
    let left;
    let right;
    if (root.left) right = invertTree(root.left);
    if (root.right) left = invertTree(root.right);

    root.left = left || null;
    root.right = right || null;

    return root;
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

console.log('#', invertTree(asymmetricTree), '3', '\n');
console.log('#', invertTree(symmetricTree), '3', '\n');
console.log('#', invertTree(treeWithoutExplicitEmpties), '2', '\n');
console.log('#', invertTree(emptyRoot), '1', '\n');
console.log('#', invertTree(noRoot), '0', '\n');
