function clearDigits(s: string): string {
  const n = s.length;
  const left = [];

  for (let i = 0; i < n; i++) {
    if (isNaN(parseInt(s[i]))) {
      left.push(s[i]);
    } else {
      // 만약 digit 이라면 좌측 하나 제거
      left.pop();
    }
  }

  return left.join("");
}
