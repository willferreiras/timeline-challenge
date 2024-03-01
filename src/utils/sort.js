export function sortDataByDate(items) {
  return items.sort((a, b) => new Date(a.start) - new Date(b.start));
}
