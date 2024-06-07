function checkIsNaN(value) {
    const numberValue = Number(value);
    return numberValue !== numberValue;
  }
  
  // Testing the custom isNaN implementation
  console.log(checkIsNaN(NaN)); // true
  console.log(checkIsNaN(undefined)); // true
  console.log(checkIsNaN({})); // true
  console.log('-----------------');

  console.log(checkIsNaN(true)); //false
  console.log(checkIsNaN(null)); // false
  console.log(checkIsNaN(123)); // false
  console.log('-----------------');

  // Strings
  console.log(checkIsNaN('123')); // false
  console.log(checkIsNaN('12.3')); // false
  console.log(checkIsNaN('12,3')); // true
  console.log(checkIsNaN('abc')); // true
  console.log(checkIsNaN('')); // false
  console.log(checkIsNaN(' ')); // false
  console.log('-----------------');

  // Dates
  console.log(checkIsNaN(new Date())); // false
  console.log(checkIsNaN(new Date().toString())); // true 
  console.log('-----------------');


  // Arrays
  console.log(checkIsNaN([])); // false
  console.log(checkIsNaN([1])); // false
  console.log(checkIsNaN([1, 2])); // true


