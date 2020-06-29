var maxDepth = function(root, depth = 1) {
    try {
        if (root.left || root.right) {
            let deepest = 0;
            if (root.left) {
                deepest = maxDepth(root.left, depth + 1);
            }
            if (root.right) {
                let rightDepth = maxDepth(root.right, depth + 1);
                if (rightDepth > deepest) deepest = rightDepth;
            }
            return deepest;
        }

        return depth;
    } catch (error) {
        return 0;
    }
};

const root = {
    val: 3,
    left: { val: 9, left: null, right: null },
    right: {
        val: 20,
        left: { val: 15, left: null, right: null },
        right: { val: 7, left: null, right: null }
    }
};

const emptyRoot = {
    val: null,
    left: null,
    right: null
};

const noRoot = null;

console.log(maxDepth(noRoot));
