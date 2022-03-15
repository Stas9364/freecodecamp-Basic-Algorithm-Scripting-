function getIndexToIns(arr, num) {
    let array = arr.sort((a, b) => a -b);
    let index;
        if (arr.length == 0) return 0;
        for (let i = 0; i < array.length; i++) {
            if (num <= array[i]) {
            index = i;
            break;
        }else if (num > array[array.length-1]) {
            index = array.length;
        }
        }
        return index;
    }
    
    getIndexToIns([10, 20, 30, 40, 50], 35);