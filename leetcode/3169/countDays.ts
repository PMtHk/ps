function countDays(days: number, meetings: number[][]): number {
  const n = meetings.length;
  const sortedMeetings = meetings.sort((a, b) => a[0] - b[0]);
  const occupied: number[][] = [];

  for (let i = 0; i < n; i++) {
    const [start, end] = sortedMeetings[i];

    if (occupied.length === 0) {
      occupied.push([start, end]);
      continue;
    }

    const last = occupied[occupied.length - 1];
    if (start <= last[1]) {
      last[1] = Math.max(last[1], end);
      continue;
    }
    occupied.push([start, end]);
  }

  let occupiedDays = 0;
  for (const [s, e] of occupied) {
    occupiedDays += e - s + 1;
  }

  return days - occupiedDays;
}
