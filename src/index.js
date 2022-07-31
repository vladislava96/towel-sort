module.exports = function towelSort (matrix) {
  let newArr = [];
  matrix.map(arr => {
    arr.map(elem => {
      newArr.push(elem)
    })
  })
  function sort(arr) {
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
    return [...sort(smaller), mediumElem, ...sort(large)]
  }
  return sort(newArr)
}
