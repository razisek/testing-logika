function waitingTime(input) {
    let total = 0;
    let lastOrder = 0;
    let washBlender = 2;

    for (let i = 0; i < input.length; i++) {
        if (lastOrder == 0) {
            lastOrder = input[i];
            total += input[i];
        } else {
            lastOrder = lastOrder + washBlender + input[i];
            total += lastOrder;
        }
    }
    
    return total;
}


console.log(waitingTime([5, 4, 3]))
