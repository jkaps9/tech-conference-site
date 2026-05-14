export function compareTalks(a, b) {
    return (
    a.data.day - b.data.day ||
    Number(a.data.startTime.slice(0, 2)) - Number(b.data.startTime.slice(0, 2))
  );
}