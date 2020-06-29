// Credit to the sample for 52ms
var maxDepth = function(root) {
    try {
        const stack = [root];
        let depth = 0;

        while (stack.length > 0) {
            const len = stack.length;
            depth++;
            for (let i = 0; i < len; i++) {
                const top = stack.shift();
                if (top.left) stack.push(top.left);
                if (top.right) stack.push(top.right);
            }
        }

        return depth;
    } catch (error) {
        console.error(error);
        return 0;
    }
};
