// Iterative Approach
var invertTree = function(root) {
    if (!root) return null;
    const stack = [root];

    while (stack.length > 0) {
        const len = stack.length;

        for (let i = 0; i < len; i++) {
            const top = stack.shift();
            const temp = top.left;
            top.left = top.right || null;
            top.right = temp || null;

            if (top.left) stack.push(top.left);
            if (top.right) stack.push(top.right);
        }
    }
    return root;
};

const symmetricTree = {
    val: 4,
    left: {
        val: 2,
        left: { val: 1, left: null, right: null },
        right: { val: 3, left: null, right: null }
    },
    right: {
        val: 7,
        left: { val: 6, left: null, right: null },
        right: { val: 9, left: null, right: null }
    }
};

const asymmetricTree = {
    val: 3,
    left: { val: 9, left: null, right: null },
    right: {
        val: 20,
        left: { val: 15, left: null, right: null },
        right: { val: 7, left: null, right: null }
    }
};

const treeWithoutExplicitEmpties = {
    val: 1,
    left: { val: 1, left: null, right: null }
};

console.log(JSON.stringify(invertTree(null)));
