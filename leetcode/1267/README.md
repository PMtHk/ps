# 1267. Count Servers that Communicate

## 1차 (성공)

rows 로 1회, columns 로 1회 조건에 맞는 서버 수 계산
중복 제거

## 2차 (성공)

성능을 위해 로직 수정
- 별도의 방문 처리 제거
- rows 및 cols 별 카운트 측정
- 모든 위치를 순회하며 앞의 row 별, col 별 수를 기반으로 카운트 계산