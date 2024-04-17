function reverseString(str) {
  return (str.length <= 1) ? str : reverseString(str.slice(1)) + str[0];
}

console.log(reverseString("hello123"));
