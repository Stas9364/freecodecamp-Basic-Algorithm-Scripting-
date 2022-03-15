function bouncer(arr) {
    let newArr = [];
        for (let elem of arr) {
          if (Boolean(elem)){
            newArr.push(elem);
          }
        }
        return newArr;
    }
    
    bouncer([7, "ate", "", false, 9]);