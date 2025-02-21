function smallestNumber(pattern: string): string {
  const result: number[] = [];
  const stack: number[] = [];

  for (let i = 1; i <= pattern.length + 1; i++) {
    stack.push(i);

    if (pattern[i - 1] === "I") {
      while (stack.length) {
        result.push(stack.pop());
      }
    }
  }

  while (stack.length) {
    result.push(stack.pop());
  }

  return result.join("");
}
