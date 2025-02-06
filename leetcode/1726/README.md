# 1726. Tuple with Same Product

합이 같은 조합의 개수 찾기

## 1차 (성공, 21min)

곱셈의 결과가 두번 이상 반복되면 8개의 조합이 생긴다.

반복문을 두 번 돌면서, 곱셈의 결과가 이미 있는지를 파악하고, 마지막에 8을 곱하자.

약 176ms

```ts
function tupleSameProduct(nums: number[]): number {
  const n = nums.length;
  const products = new Map();

  let answer = 0;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const product = nums[i] * nums[j];

      if (products.get(product) >= 1) {
        answer += products.get(product) || 0;
      }

      products.set(product, (products.get(product) || 0) + 1);
    }
  }

  console.log(products);

  return answer * 8;
}
```