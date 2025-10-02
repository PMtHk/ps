/**
 * 풀이 시간: 5분
 * 소요 시간: 0ms
 */

function numWaterBottles(numBottles: number, numExchange: number): number {
  let numDrinkBottles = numBottles;
  let numEmptyBottles = numBottles;

  while (numEmptyBottles >= numExchange) {
    numEmptyBottles -= numExchange;
    numDrinkBottles += 1;
    numEmptyBottles += 1;
  }

  return numDrinkBottles;
}
