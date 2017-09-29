var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(arr, el) {
  var new_arr = arr
  return new_arr.unshift(el)
}

function destructivelyAddElementToBeginningOfArray(arr, el) {
  arr = arr.unshift(el)
  return arr
}
