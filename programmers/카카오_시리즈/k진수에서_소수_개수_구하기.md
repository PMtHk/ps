# k진수에서 소수 개수 구하기

https://school.programmers.co.kr/learn/courses/30/lessons/92335

- 소수 구하는 함수 별도로 생성
- K진수로 변경 후 계산

```js
function solution(n, k) {
    var answer = 0
    
    let 십진수 = n
    let 변환된_수 = n.toString(k)
    
    변환된_수.split("0").forEach(item => {
        if (isPrime(+item)) answer++
    })
    
    return answer
}

function isPrime(num) {
    if (num === 0 || num === 1) return false;
    
    for(let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) return false
    }
    
    return true
}
```
