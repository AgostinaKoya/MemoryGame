
export const shuffleCard =(array)=>{

const newArray = [...array, ...array]

  return newArray
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
}