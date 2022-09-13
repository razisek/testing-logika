function FindFactor(num) {
    var factors = [];
    for (var i = 1; i <= num; i++) {
        if (num % i === 0) {
            factors.push(i);
        }
    }
    return factors.join(",");
}

console.log(FindFactor(140));