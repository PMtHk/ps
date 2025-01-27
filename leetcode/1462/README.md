# 1462. Course Schedule |V

선수과목 여부 판별 문제

## 1차 (성공, 45min)

주어진 정보로 선수과목 `Map` 을 만들고,  
이후 DFS + Memoization 을 통해, 모든 `indirect` 선수과목 찾기

약 58ms

## 2차 (성공, +3min)

`Map` 을 추가로 생성하지 않고 주어진 `prerequisites` 를 활용하는 방식으로 변경  
크게 성능 이점은 없고, 코드 가독성은 나아짐

약 55ms 

```ts
function checkIfPrerequisite(numCourses: number, prerequisites: number[][], queries: number[][]): boolean[] {
  const memo = new Map<number, Set<number>>()
  
  const DFS = (course: number): Set<number> => {
    if (memo.has(course)) return memo.get(course)

    const preSet = new Set<number>()

    for (const [pre, next] of prerequisites) {
      if (next === course) {
        preSet.add(pre)
        for (const preOfPre of DFS(pre)) {
          preSet.add(preOfPre)
        }
      }
    }

    memo.set(course, preSet)
    return preSet
  }

  for (let i = 0; i < numCourses; i++) {
    DFS(i)
  }

  return queries.map(([pre, next]) => memo.get(next)?.has(pre) ?? false)
}
```