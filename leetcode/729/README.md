# 729. My Calendar I

## 1차 (성공, 8min)

약 36ms

```ts
class MyCalendar {
    constructor(
        private booked: number[][] = [],
        private min: number = Infinity,
        private max: number = -Infinity) {
    }

    book(startTime: number, endTime: number): boolean {
        const n = this.booked.length

        if (n === 0) {
            this.max = endTime
            this.min = startTime
            this.booked.push([startTime, endTime])
            return true
        }

        if (startTime >= this.max) {
            this.max = endTime
            this.booked.push([startTime, endTime])
            return true
        }

        if (endTime <= this.min) {
            this.min = startTime
            this.booked.unshift([startTime, endTime])
            return true
        }


        for (let i = 0; i < n - 1; i++) {
            if (startTime >= this.booked[i][1] && endTime <= this.booked[i + 1][0]) {
                this.booked.splice(i + 1, 0, [startTime, endTime])
                return true
            }
        }

        return false
    }
}
```
