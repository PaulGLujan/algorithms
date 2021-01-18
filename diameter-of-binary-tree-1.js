var diameterOfBinaryTree = function (root) {
    let diameter = 0;
    const maxDepthAndCompare = (root) => {
        if (!root) return 0;
        const leftDepth = maxDepthAndCompare(root.left);
        const rightDepth = maxDepthAndCompare(root.right);
        const longPath = leftDepth + rightDepth;
        if (longPath > diameter) diameter = longPath;
        return Math.max(leftDepth, rightDepth) + 1;
    };
    maxDepthAndCompare(root);
    return diameter;
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

const longInnerCrotch = {
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

console.log('#', diameterOfBinaryTree(asymmetricTree), '3', '\n');
console.log('#', diameterOfBinaryTree(symmetricTree), '4', '\n');
console.log('#', diameterOfBinaryTree(treeWithoutExplicitEmpties), '1', '\n');
console.log('#', diameterOfBinaryTree(emptyRoot), '0', '\n');
console.log('#', diameterOfBinaryTree(noRoot), '0', '\n');
