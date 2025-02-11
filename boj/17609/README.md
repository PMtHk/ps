# 17609. 회문

앞 뒤 방향으로 볼 때 같은 순서의 문자로 구성된 문자열인지 판별하는 문제

- 한 단어를 삭제해서 회문으로 만들 수 있다면 유사 회문

## 1차 (실패, 20min)

투 포인터를 활용해 좌측을 지우는 경우 / 우측을 지나는 경우를 계산  
하지만, 모든 경우를 계산할 수 없어 실패

```js
function solution(word) {
  const n = word.length;

  let left = 0;
  let right = n - 1;

  let chance = 1;

  while (left < right) {
    if (word[left] === word[right]) {
      left++;
      right--;
    } else {
      if (chance === 0) {
        return 2;
      }

      if (word[left + 1] === word[right]) {
        left++;
      } else {
        return 2;
      }

      if (word[left] === word[right - 1]) {
        right--;
      } else {
        return 2;
      }
    }
  }

  return chance === 1 ? 0 : 1;
}
```

## 2차 (성공, +60min)

항상 왼쪽을 제거해 회문인지 검사하고, 항상 오른쪽을 제거해 회문인지 검사하고,  
그 결과를 이용해 회문인지, 유사회문인지 다면, 두 번의 while 문으로 해결

약 208ms

```js
const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath, "utf8").trim().split("\n").slice(1);

input.forEach((word) => {
  console.log(solution(word));
});

function solution(word) {
  let left = 0;
  let right = word.length - 1;

  let flag = 0;

  while (left < right) {
    if (word[left] === word[right]) {
      left++;
      right--;
    } else {
      left++;
      flag++;
    }
  }

  if (flag === 0) {
    return 0;
  } else if (flag === 1) {
    return 1;
  }

  left = 0;
  right = word.length - 1;

  flag = 0;

  while (left < right) {
    if (word[left] === word[right]) {
      left++;
      right--;
    } else {
      right--;
      flag++;
    }
  }

  if (flag === 0) {
    return 0;
  } else if (flag === 1) {
    return 1;
  }

  return 2;
}
```
