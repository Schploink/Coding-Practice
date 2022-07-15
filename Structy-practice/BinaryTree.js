// depth first traversal - iterative vs recursive

const depthFirstValues = (root) => {
  // create result array - create stack
  // seed stack with root - add children to stack, right, left 
  
  if (root === null) return []
  let result = []
  let stack = [root]
  
  while (stack.length) {
    currentNode = stack.pop()
    if (currentNode.right != null) {
      stack.push(currentNode.right)
    }
    if (currentNode.left != null) {
      stack.push(currentNode.left)
    }
    result.push(currentNode.val)
  }
  
  return result
};

const depthFirstRecursive = (root) => {
  if (root === null)
    return [];
    // base case =
  
  const leftValues = depthFirstRecursive(root.left);
  const rightValues = depthFirstRecursive(root.right);
  return [ root.val, ...leftValues, ...rightValues ];
};