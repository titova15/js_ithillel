function drawTriangleFirst(height, symbol) {
    for (let i = 1; i <= height; i++) {
        console.log(symbol.repeat(i));
    }
}

drawTriangleFirst(5, '*')

console.log('-------------------------------------------------');


function drawTriangleSecond(height, symbol) {
    let i = 1;
    while (i <= height) {
        let row = '';
        let j = 1;
        while (j <= i) {
            row += symbol;
            j++;
        }
        console.log(row);
        i++;
    }
}

drawTriangleSecond(7, '*');
