function truncateString(str, num) {
    let string = '';
    if (str.length <= num) return str;
    for (let i = 0; i < num; i++) {
      string += str[i];
    }
    return `${string}...`;
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", 8);