function titleCase(str) {
    let string = str.toLowerCase();
    return string
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
  
  console.log(titleCase("I'm a little tea pot"));