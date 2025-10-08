//
// This is only a SKELETON file for the 'BookStore' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const cost = (books) => {
  const BOOK_PRICE = 800; // price in cents
  const DISCOUNTS = {
    1: 0,
    2: 0.05,
    3: 0.1,
    4: 0.2,
    5: 0.25,
  };

  if (!books.length) return 0;

  // Count how many copies of each of the 5 books
  const counts = new Array(5).fill(0);
  for (const book of books) counts[book - 1]++;

  const groups = [];

  // Greedily form groups of unique books
  while (Math.max(...counts) > 0) {
    let setSize = 0;
    for (let i = 0; i < 5; i++) {
      if (counts[i] > 0) {
        counts[i]--;
        setSize++;
      }
    }
    groups.push(setSize);
  }

  // Adjust for the special (5 + 3) -> (4 + 4) optimization
  while (groups.includes(5) && groups.includes(3)) {
    groups.splice(groups.indexOf(5), 1);
    groups.splice(groups.indexOf(3), 1);
    groups.push(4, 4);
  }

  // Calculate total cost
  return groups.reduce(
    (total, size) => total + size * BOOK_PRICE * (1 - DISCOUNTS[size]),
    0
  );
};
