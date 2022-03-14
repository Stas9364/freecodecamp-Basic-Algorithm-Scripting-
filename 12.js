function frankenSplice(arr1, arr2, n) {
    let second = [...arr2];
    second.splice(n, 0, ...arr1)
    return second;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);