import {
  addDays,
  min,
  max,
  differenceInDays,
  isEqual,
  subDays,
} from "date-fns";

export function addCustomDays(date, days) {
  const newDate = addDays(new Date(date), days);
  return new Date(newDate);
}

export function removeCustomDays(date, days) {
  const newDate = subDays(new Date(date), days);
  return new Date(newDate);
}

export function getMinDate(items) {
  return min(items);
}

export function getMaxDate(items) {
  return max(items);
}

export function identifyTimelineDates(items) {
  const dates = [];
  const firstDate = getMinDate([...items.map((e) => new Date(e.startDate))]);
  let lastDate = getMaxDate([
    ...items.map((e) => new Date(e.endDate).getTime()),
  ]);

  let dateAtual = firstDate;

  while (dateAtual <= lastDate) {
    dates.push(dateAtual);
    dateAtual = addCustomDays(dateAtual, 1);
  }

  return dates;
}

export const areDatesEqual = (initialDate, dateToCompare) => {
  return isEqual(initialDate, dateToCompare);
};

export const getDaysDifference = (finalDate, initialDate) => {
  return differenceInDays(finalDate, initialDate);
};
