//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const GS_IN_MS = 1e9*1000;
export const gigasecond = (date) => {
  return new Date(date.getTime()+GS_IN_MS)
};
