// syntax for Math any methods is : Math.method.(number)

const biggest = (tab) => {
  return Math.max.apply(null, tab)
}

console.log(biggest([10110, 11011, 11001, 10011]));