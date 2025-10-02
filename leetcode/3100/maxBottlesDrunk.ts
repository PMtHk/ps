/**
 * 풀이 시간: 5분
 * 런타임: 43ms (83.33%)
 */

function maxBottlesDrunk(numBottles: number, numExchange: number): number {
    let currentNumExchange = numExchange
    let numDrinkBottles = numBottles 
    let numEmptyBottles = numBottles

    while (numEmptyBottles >=  currentNumExchange) {
        numEmptyBottles -= currentNumExchange
        numDrinkBottles += 1
        numEmptyBottles += 1
        currentNumExchange += 1
    }

    return numDrinkBottles
};