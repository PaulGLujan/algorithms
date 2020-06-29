// Recursive approach
var invertTree = function(root) {
    if (root === null) return root;

    // Traverse tree
    let left, right;
    if (root.left) {
        left = invertTree(root.left);
    }
    if (root.right) {
        right = invertTree(root.right);
    }

    // Invert
    root.left = right || null;
    root.right = left || null;

    console.log(JSON.stringify(root));
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

console.log(invertTree(test2));
