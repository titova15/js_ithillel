const regex = /^(?!.*[Aa]).{6,}$/;
const fruits = ["apple", "bAnAnA", "cherry", "mango", "blueberry", "papaya"];

fruits.forEach(fruit => {
    if (regex.test(fruit)) {
        console.log(fruit);
    }
});
