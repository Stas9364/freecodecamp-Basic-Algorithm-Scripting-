function confirmEnding(str, target) {
    let x = str.slice(str.length-target.length, str.length);
    if (x == target) return true;
    return false;
  }
  
  confirmEnding("Congratulation", "on");