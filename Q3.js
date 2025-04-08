function getMaxValueFromDigits(num) {


  if (typeof num < 10) {
    return 'Input must be a number with at least 2 digits.';
  }

  const maxNum = parseInt(
    num
      .toString()
      .split('')
      .sort((a, b) => b - a)
      .join('')
  );

  return maxNum;
}
console.log(" "); 
console.log("Input number = 215, Max = ",getMaxValueFromDigits(215));  
console.log(" "); 
console.log("Input number = 1093, Max =",getMaxValueFromDigits(1093)); 
console.log(" "); 