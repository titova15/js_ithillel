const prompt = require('prompt-sync')();

function howOldAreYou(number) {
    var lastDigit = number % 10;
    var lastTwoDigits = number % 100;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
        return number + " років";
    }

    switch (lastDigit) {
        case 1:
            return number + " рік";
        case 2:
        case 3:
        case 4:
            return number + " роки";
        default:
            return number + " років";
    }
}

function main() {
    var input = prompt("Будь ласка, введіть кількість років: ");

    if (input === null) {
        console.log("Введення скасовано.");
        return;
    }

    input = input.trim();

    if (input === "" || isNaN(input) || input < 0) {
        console.log("Будь ласка, введіть коректне число, яке не є від'ємним.");
    } else {
        var number = parseInt(input, 10);
        console.log(howOldAreYou(number));
    }
}

main();
