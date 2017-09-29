var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(arr, el) {
  let new_arr = arr
  new_arr = new_arr.unshift(el)
}

function destructivelyAddElementToBeginningOfArray(arr, el) {
  arr = arr.unshift(el)
  return arr
}

function addElementToEndOfArray(arr, el) {
  let new_arr = arr
  new_arr = new_arr.push(el)
  return new_arr
}
