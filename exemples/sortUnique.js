// Remove doubles

const makeUnique = (Row) => {
  return Array.from(new Set (Row));
}
console.log(makeUnique([10110, 11011, 11001, 10011, 11011, 10110, 10011]))

