function pow(x, y) {
    let result = 1; 

    if (y < 0) {
        x = 1 / x; 
        y = -y; 
    }

    for (let i = 0; i < y; i++) {
        result *= x; 
    }

    return result;
}

console.log(pow(2, 3));
console.log(pow(2, -2)); 
console.log(pow(10, 0)); 
console.log(pow(2.5, 2));



