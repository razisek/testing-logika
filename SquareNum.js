function checkSquareNum(arr) {
    let result = [];
    let fulfill = false;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                if (Math.pow(arr[i], 2) + Math.pow(arr[j], 2) == Math.pow(arr[k], 2)) {
                    result.push([arr[i], arr[j], arr[k]]);
                }
            }
        }
    }

    fulfill = result.length > 0 ? true : false;
    let message = '';
    if (fulfill) {
        message = fulfill + " => numeric that fulfill " + result[0];
    } else {
        message = fulfill;
    }

    return message;
}

console.log(checkSquareNum([5, 9, 12, 13, 15, 17, 18]));