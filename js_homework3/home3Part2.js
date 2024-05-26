let sum = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        continue; // Skip numbers that are multiples of 3
    }
    sum += i;
}

console.log('Sum:', sum);
 