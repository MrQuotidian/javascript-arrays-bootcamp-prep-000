var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

addElementToBeginningOfArray([1], "foo")

function addElementToBeginningOfArray(arr, el) {
  return [el, ...arr]
}

function destructivelyAddElementToBeginningOfArray(arr, el) {
  arr.unshift(el)
}

function addElementToEndOfArray(arr, el) {
  return [...arr, el]
}
