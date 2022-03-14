function repeatStringNumTimes(str, num) {
    let string = '';
    if (num < 0) return string;
    for (let i = 0; i < num; i ++) {
      string += str;
    }
    return string;
  }
  
  console.log(repeatStringNumTimes("abc", 3));