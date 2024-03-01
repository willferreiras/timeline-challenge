import { sortDataByDate } from "./sort";

export function formatAndGroupTimelineData(items) {
  const sortedData = sortDataByDate(items);

  const events = [];
  sortedData.forEach((item) => {
    let overlaping = false;

    for (const event of events) {
      const overlaps = event.some(
        (existingItem) =>
          new Date(existingItem.endDate) >= new Date(item.startDate)
      );
      if (!overlaps) {
        event.push(item);
        overlaping = true;
        break;
      }
    }

    if (!overlaping) {
      events.push([item]);
    }
  });
  return events;
}
