var maxDepth = function (root) {
    if (!root) return 0;
    const stack = [root];
    let start = 0;
    let end = stack.length;
    let depth = 0;
    while (start < end) {
        depth++;
        for (let i = start; i < end; i++) {
            const root = stack[i];
            if (root.left) stack.push(root.left);
            if (root.right) stack.push(root.right);
        }
        start = end;
        end = stack.length;
    }
    return depth;
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
