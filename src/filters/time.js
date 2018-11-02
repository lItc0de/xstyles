export const addLeadingZero = (number) => {
  if (number < 10) return `0${number}`;
  return number.toString();
};

export const msToMinSec = (ms) => {
  const total = (ms / 1000);
  const minutes = Math.round(total / 60);
  const seconds = addLeadingZero(Math.round(total % 60));
  return `${minutes}:${seconds}`;
};
