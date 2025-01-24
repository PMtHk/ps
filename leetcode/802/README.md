# 802. Find Eventual Safe States

- 단방향 그래프
- 0-indexed
- 2차원

outgoing 이 없다면 terminal  
모든 경로가 terminal 로 간다면 safe

## 1차 (성공, 14min)

문제에서 주어지는 ingoing 정보를 outgoing 정보로 바꾼 후,   
terminal node 부터 차례로 순회하며 찾기

약 1000ms

## 2차 (성공, +7min)

성능 개선을 하기 위해 불필요한 순회 줄이기 시도  
**DFS 방식으로 변경**

1. node 를 기준으로 outgoing 이 없다면 safe  
2. 모든 outgoing 이 safe 라면 safe

한 node 에서 DFS 진행 후, 하위 모든 node 가 safe 인지 판별

약 40ms