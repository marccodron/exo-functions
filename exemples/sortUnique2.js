const makeUnique = (Row) => {
    let Inspect = [...new Set(Row)]
    let Sortlist = Inspect.sort((a, b) => a - b)
    return Sortlist
}

console.log(makeUnique([10110, 11011, 11001, 10011, 11011, 10110, 10011]))