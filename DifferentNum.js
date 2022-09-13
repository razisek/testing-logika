function DifferentNum(arr1, arr2) {
    var result = [];
    for (var i = 0; i < arr1.length; i++) {
        if (arr2.indexOf(arr1[i]) === -1) {
            result.push(arr1[i]);
        }
    }
    for (var j = 0; j < arr2.length; j++) {
        if (arr1.indexOf(arr2[j]) === -1) {
            result.push(arr2[j]);
        }
    }
    return result;
}

console.log(DifferentNum([1, 2, 3, 4, 5], [1, 3, 4, 5, 6]));