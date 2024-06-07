  function pad(str, char, count, addTo) {
    const paddingLength = Math.max(count - str.length, 0);
    const padding = char.repeat(paddingLength);
  
    if (addTo) {
      return padding + str;
    } else {
      return str + padding;
    }
  }
  
  console.log(pad('qwerty', '+', 8, true));  
  console.log(pad('qwerty', '+', 10, false)); 
  console.log(pad('qwerty', '+', 6, true));   
  console.log(pad('qwerty', '+', 3, false));  

  