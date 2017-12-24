var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
console.log(chocolateBars)

addElementToBeginningOfArray(array, element){
  return  [element, ...array]
}

destructivelyAddElementToBeginningOfArray(array, element){
  return array.unshift(element)
}

addElementToEndOfArray(array, element){
  return [...array, element]
}

destructivelyAddElementToEndOfArray(array, element){
  return array.push(element)
}
