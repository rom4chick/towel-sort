module.exports = function towelSort (matrix) {
  let towelArr = [];
  if (matrix) {
    matrix.forEach((arr, index) => {
      if (index % 2 === 0) {
        arr.forEach(arrEl => towelArr.push(arrEl));
      } else {
        arr.reverse();
        arr.forEach(arrEl => {
          towelArr.push(arrEl);
        })
     
      } 
    });
  }
  
  return towelArr;
}
