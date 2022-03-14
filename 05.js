function largestOfFour(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let max = arr[i][0];
      for (let k = 0; k < arr[i].length; k++) {
        if (max < arr[i][k]) {
          max = arr[i][k];
        }
      }
      newArr.push(max);
    }
    return newArr;
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);