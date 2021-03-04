const biggest = (tab) => {
  let result = 0
  for (i = 0; i < tab.length; i++){
    if (tab[i] >= result)
    {
      result = tab[i]
    }
  }
  return result
}

console.log(biggest([10110, 11011, 11001, 10011]))