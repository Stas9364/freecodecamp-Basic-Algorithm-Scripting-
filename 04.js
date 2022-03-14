function findLongestWordLength(str) {
    let arr = str.split(' ');
    let max = arr[1].length;
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i].length) {
          max = arr[i].length;
        }
    } {
    }
    return max;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");