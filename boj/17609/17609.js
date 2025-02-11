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
