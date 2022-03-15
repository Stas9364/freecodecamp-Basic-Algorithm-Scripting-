function mutation(arr) {
    let firstW = arr[0].toLowerCase();
    let secondW = arr[1].toLowerCase();
    let letters = 0;
        for (let i = 0; i < secondW.length; i++) {
            if (firstW.includes(secondW[i])) {
                letters++;
            }
        }
        if (letters == secondW.length) {
            return true;
        }else {
            return false;
        }
    }
    
    mutation(["hello", "hey"]);