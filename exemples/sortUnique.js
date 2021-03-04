const makeUnique = (Row) => {
  return Array.from(new Set (Row));
}
console.log(makeUnique([1, 2, 1, 3, 2, 4, 5, 7, 5, 1]))

