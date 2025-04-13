function countGoodNumbers(n: number): number {
  const MOD = BigInt(1e9 + 7);

  const evenCount = Math.ceil(n / 2);
  const oddCount = Math.floor(n / 2);

  function powerMod(base: number, exponent: number): bigint {
    let result = BigInt(1);
    let bigBase = BigInt(base) % MOD;
    let exp = BigInt(exponent);

    while (exp > 0n) {
      if (exp % 2n === 1n) {
        result = (result * bigBase) % MOD;
      }

      bigBase = (bigBase * bigBase) % MOD;
      exp = exp / 2n;
    }

    return result;
  }

  const even = powerMod(5, evenCount);
  const odd = powerMod(4, oddCount);

  return Number((even * odd) % MOD);
}
