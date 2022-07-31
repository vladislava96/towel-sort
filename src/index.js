module.exports = function towelSort (matrix) {

  function sortAscending(arr) {
    if (arr.length <= 1) {
      return arr
    }
    let smaller = [];
    let large = [];
    
    let mediumIndex = Math.floor(arr.length / 2);
    let mediumElem = arr[mediumIndex];
    
    for (let i = 0; i < arr.length; i++) {
      if (i === mediumIndex) {
        continue
      }
      if (arr[i] < mediumElem) {
        smaller.push(arr[i])
      } else {
        large.push(arr[i])
      }
    }
    return [...sortAscending(smaller), mediumElem, ...sortAscending(large)]
  }

  function sortDescending(arr) {
    if (arr.length <= 1) {
      return arr
    }
    let smaller = [];
    let large = [];
    
    let mediumIndex = Math.floor(arr.length / 2);
    let mediumElem = arr[mediumIndex];
    
    for (let i = 0; i < arr.length; i++) {
      if (i === mediumIndex) {
        continue
      }
      if (arr[i] < mediumElem) {
        smaller.push(arr[i])
      } else {
        large.push(arr[i])
      }
    }
    return [...sortDescending(large), mediumElem, ...sortDescending(smaller)]
  }

  let newMatrix = matrix.map((arrMin, index) => index%2 === 0 ? sortAscending(arrMin) : sortDescending(arrMin))
  return newMatrix
}