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

function constructFromPrePost(
  preorder: number[],
  postorder: number[]
): TreeNode | null {
  const root = new TreeNode(preorder[0]);
  const nodes: TreeNode[] = [root];

  let postIndex = 0;

  for (let i = 1; i < preorder.length; i++) {
    const node = new TreeNode(preorder[i]);

    while (
      nodes.length &&
      nodes[nodes.length - 1].val === postorder[postIndex]
    ) {
      nodes.pop();
      postIndex += 1;
    }

    if (!nodes[nodes.length - 1].left) {
      nodes[nodes.length - 1].left = node;
    } else {
      nodes[nodes.length - 1].right = node;
    }

    nodes.push(node);
  }

  return root;
}
