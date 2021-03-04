// Remove doubles

const makeUnique = (array) => {
  return array.sort((a, b) => a - b)
  .filter((a, b, c) => 
  c.indexOf(a) === b)
}
console.log(makeUnique(
  [10110, 11011, 11001, 10011, 11011, 10110, 10011, 11011, 11001, 10011, 11011]
  )
)