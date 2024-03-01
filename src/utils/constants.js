export const BLOCK_WIDTH = 150;

export const eventItemStyle = (differenceInDaysValue) => {
  return `${
    differenceInDaysValue ? BLOCK_WIDTH * differenceInDaysValue : BLOCK_WIDTH
  }px`;
};
