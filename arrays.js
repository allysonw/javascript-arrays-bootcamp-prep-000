/* chocolateBars = "hat"
//var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

addElementToBeginningOfArray(array, element){
  return  [element, ...array];
}

destructivelyAddElementToBeginningOfArray(array, element){
  return array.unshift(element);
}

addElementToEndOfArray(array, element){
  return [...array, element];
}

destructivelyAddElementToEndOfArray(array, element){
  return array.push(element);
}
*/
