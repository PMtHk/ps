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
