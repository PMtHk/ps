# 2948. Make Lexicograhpically Smallest Array by Swapping Elements

- 사전식 순서로 정렬하는 문제
- 정렬 가능 조건이 있음 (두 수의 차이가 `limit` 이하)

## 1차 (성공, 43min)

오름 차순으로 정렬되어 있다면,  
연속된 두 수의 차이가 `limit` 이하라면, 하나의 그룹으로 묶어서 정렬을 시도할 수 있음

주어진 위치를 기록하고 (index 배열)  
한 그룹 내 위치(index)와 그 숫자 값(nums)을 차례로 매칭.

