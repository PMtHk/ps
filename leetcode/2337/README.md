# 2337. Move Pieces to Obtain a String

주어진 두 문자열 `start`, `target` 이 있다.  
다음 조건을 만족하며, `start`를 변형시켜 `target`을 만들 수 있는지를 찾는 문제이다.

- L은 해당 위치로 부터 왼쪽으로만 움직일 수 있다.
- R은 해당 위치로 부터 오른쪽으로만 이동할 수 있다.
- L과 R은 서로 다른 문자를 통과할 수 없다.

## 1차 (성공, 24min)

L과 R이 나타나는 index를 기반으로 예상할 수 있다.  
예를 들어, start의 L의 인덱스들을 구해, 그 각각이 target의 L의 인덱스보다 크거나 같아야 한다.  
R의 경우 그 반대이다.  

하지만, 이렇게는 `L과 R은 서로 다른 문자를 통과할 수 없다.`를 만족시킬 수 없다.  
따라서, _을 제거한 문자열을 서로 비교해서 동일한지 파악해서 이를 해결할 수 있다.

약 60ms

```ts
function canChange(start: string, target: string): boolean {
  const n = start.length;

  const LStart: number[] = [];
  const LTarget: number[] = [];

  const RStart: number[] = [];
  const RTarget: number[] = [];

  const s = start.replaceAll("_", "");
  const t = target.replaceAll("_", "");

  if (s !== t) {
    return false;
  }

  for (let i = 0; i < n; i++) {
    if (start[i] === "L") LStart.push(i);
    if (start[i] === "R") RStart.push(i);
    if (target[i] === "L") LTarget.push(i);
    if (target[i] === "R") RTarget.push(i);
  }

  for (let i = 0; i < LStart.length; i++) {
    if (LStart[i] < LTarget[i]) return false;
  }

  for (let i = RStart.length - 1; i > -1; i--) {
    if (RStart[i] > RTarget[i]) return false;
  }

  return true;
}
```