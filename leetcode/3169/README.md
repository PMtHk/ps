# 3169. Count Days Without Meetings

주어진 회의 시간을 모두 파악해, 점유되지 않은 회의 시간을 구하는 문제

## 1차 (성공, 28min)

`occupied` 배열을 만들어, 겹치면 겹치는 부분의 끝을 늘리고,  
겹치지 않으면 `occupied`에 추가하는 식으로

> 어디 코딩테스트 기출에 출제되었던 것 같다... 아닌가?

약 64ms

```ts
function countDays(days: number, meetings: number[][]): number {
  const n = meetings.length;
  const sortedMeetings = meetings.sort((a, b) => a[0] - b[0]);
  const occupied: number[][] = [];

  for (let i = 0; i < n; i++) {
    const [start, end] = sortedMeetings[i];

    if (occupied.length === 0) {
      occupied.push([start, end]);
      continue;
    }

    const last = occupied[occupied.length - 1];
    if (start <= last[1]) {
      last[1] = Math.max(last[1], end);
      continue;
    }
    occupied.push([start, end]);
  }

  let occupiedDays = 0;
  for (const [s, e] of occupied) {
    occupiedDays += e - s + 1;
  }

  return days - occupiedDays;
}
```