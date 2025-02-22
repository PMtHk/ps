/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function recoverFromPreorder(traversal: string): TreeNode | null {
  const n = traversal.length;
  const nodes: TreeNode[] = [];

  let i = 0;

  while (i < n) {
    let depth = 0;
    while (i < n && traversal[i] === "-") {
      depth += 1;
      i++;
    }

    let start = i;
    while (i < n && traversal[i] !== "-") {
      i++;
    }

    const num = parseInt(traversal.substring(start, i));
    const node = new TreeNode(num);

    while (nodes.length > depth) {
      nodes.pop();
    }

    if (nodes.length > 0) {
      if (!nodes[nodes.length - 1].left) {
        nodes[nodes.length - 1].left = node;
      } else {
        nodes[nodes.length - 1].right = node;
      }
    }

    nodes.push(node);
  }

  return nodes[0];
}
