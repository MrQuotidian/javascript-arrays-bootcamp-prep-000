var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(arr, el) {
  let new_arr = arr
  new_arr = new_arr.unshift(el)
  return new_arr
}

function destructivelyAddElementToBeginningOfArray(arr, el) {
  return arr.unshift(el)
}

function addElementToEndOfArray(arr, el) {
  let new_arr = arr
  new_arr = new_arr.push(el)
  return new_arr
}
