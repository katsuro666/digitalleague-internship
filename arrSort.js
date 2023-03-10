function sort(arr) {
  if (arr.length < 2) {
    return arr
  }
  let pivotIndex = Math.floor(arr.length / 2)
  let pivot = arr[pivotIndex]
  let greater = []
  let less = []

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === pivot) {
      continue
    }

    if (arr[i] <= pivot) {
      less.push(arr[i])
    } else {
      greater.push(arr[i])
    }
  }

  return [...sort(less), pivot, ...sort(greater)]
}