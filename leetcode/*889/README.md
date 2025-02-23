# 880. Construct Binary Tree from Preorder and Postorder Traversal

preorder 와 postorder 정보로 트리를 생성하는 문제

## 1차 (성공, 53min)

leetcode 1028과 유사한 방식으로 도전  
`depth` 대신 postIndex 를 가지고 비교하는 방식으로 풀이

약 13ms

> 1028 코드를 보고서야 풀어낼 수 있었다.  
> 나중에 다시 풀어보는 게 좋겠다.

```ts
function constructFromPrePost(preorder: number[], postorder: number[]): TreeNode | null {
  const root = new TreeNode(preorder[0])
  const nodes: TreeNode[] = [root]

  let postIndex = 0

  for (let i = 1; i < preorder.length; i++) {
    const node = new TreeNode(preorder[i])

    while (nodes.length && nodes[nodes.length - 1].val === postorder[postIndex]) {
      nodes.pop()
      postIndex += 1
    }

    if (!nodes[nodes.length - 1].left) {
      nodes[nodes.length - 1].left = node
    } else {
      nodes[nodes.length - 1].right = node
    }

    nodes.push(node)
  }

  return root
};
```
