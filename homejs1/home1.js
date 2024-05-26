var number = 'number' + 3 + 3
console.log(number);
//Result: number33. 'number' + 3 results in the string 'number3', and then 'number3' + 3 results in 'number33'.


var result = null + 3
console.log(result);
//Result: 3. null is treated as 0 in numeric operations, so null + 3 equals 3.

var boolResult = 5 && "qwerty"
console.log(boolResult);
//Result: qwerty. Both operands are truthy, so the result is the second operand, "qwerty".

var strNumb = +'40' + +'2' + "hillel";
console.log(strNumb);
// Result: "42hillel". The unary plus (+) converts strings to numbers. +'40' + +'2' results in 42.
//Then, 42 + "hillel" concatenates the number 42 with the string "hillel".


var num = '10' - 5 === 6
console.log(num);
// Result: false. '10' is treated as a number, so '10' - 5 results in 5. 5 === 6 is false.

var boo = true + false
console.log(boo);
// Result: 1. True is treated as 1 and false as 0 in numeric operations, so true + false equals 1.

var na = '4px' - 3
console.log(na);
// Result: NaN.'4px' cannot be converted to a number, so the operation results in NaN (Not-a-Number).

var numresult = '4' - 3
console.log(numresult);
// Result: 1. '4' is treated as a number, so '4' - 3 equals 1.

var calcstring = '6' + 3 ** 0
console.log(calcstring);
// Result: '61'. 3 ** 0 equals 1, so the operation becomes '6' + 1, resulting in string concatenation.

var numbfindresult = 12 / '6'
console.log(numbfindresult);
// Result: 2. '6' is treated as a number, so 12 / '6' results in 2.

var boolNum = '10' + (5 === 6)
console.log(boolNum);
// Result: '10false' (5 === 6) is false, so the operation becomes '10' + false, resulting in string concatenation.

var booNull = null == ''
console.log(booNull);
// Result: false. null and an empty string are not equal in loose equality comparison, so the result is false.

var numOper = 3 ** (9 / 3)
console.log(numOper);
// Result: 27.     9 / 3 equals 3, so the operation becomes 3 ** 3, which equals 27.

var findftrue = !!'false' == !!'true'
console.log(findftrue);
// Result: true. true is equal to true in loose equality comparison, so the result is true.

var logOper = 0 || '0' && 1
console.log(logOper);
// Result: 1. 0 || '0' - The logical OR (||) operator returns the first truthy operand. Since 0 is falsy, JavaScript evaluates the next operand '0'.
// '0' && 1 - The logical AND (&&) operator returns the second operand if both operands are truthy. Here both '0' and 1 are truthy values, so JavaScript returns the second operand, which is 1.

var boolNu = (+null == false) < 1;
console.log(boolNu);
// Result: false. +null is converted to 0, so the expression becomes (0 == false) < 1.
// Since true is coerced to 1, and 1 < 1 is false.

var faltrue = false && true || true
console.log(faltrue);
// Result: true. false && true evaluates to false, and false || true evaluates to true.

var truefall = false && (false || true)
console.log(truefall);
// Result: false. (false || true) evaluates to true, so the expression becomes false && true, which is false.

var falnull = (+null == false) < 1 ** 5
console.log(falnull);
// Result: false. +null is converted to 0, 1 ** 5 calculates to 1 because 1 raised to the power of 5 equals 1. So, the expression (+null == false) < 1 ** 5 becomes true < 1.
// True is coerced to 1, and 1 < 1 evaluates to false.





