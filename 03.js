function factorialize(num) {
    let number = 1;
    for (let i = 1; i <= num; i++) {
      number *= i;
    }
    return number;
  }
  
  factorialize(5);