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

//breadth first not recursive because recursion stack based


const treeSum = (root) => {
  // traverse tree - collect all values, add them
  if (root === null) return 0
  
  return root.val + treeSum(root.left) + treeSum(root.right)
};

const treeIncludes = (root, target) => {
  // return true if value === target else false
  if (root === null) return false 
  
  if (root.val === target) return true
  const leftDepth = treeIncludes(root.left, target)
  const rightDepth = treeIncludes(root.right, target)
  
  return leftDepth || rightDepth  
};
