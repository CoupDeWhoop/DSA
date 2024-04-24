const isPalindrome = (x) => {
  const string = x.toString();
  return string.split("").reverse().join("") === string;
};

const isPalindromeWithoutString = (x) => {
  const getDigit = (remainingNum, reversed) => {
    const digit = remainingNum % 10;
    reversed += digit;

    if (digit === remainingNum) {
      return reversed;
    }

    reversed *= 10;
    remainingNum = Math.floor(remainingNum / 10);
    return getDigit(remainingNum, reversed);
  };

  let number = x;
  const reversed = getDigit(number, 0);
  console.log(reversed, x);
  return reversed === x;
};

console.log(isPalindromeWithoutString(98899));
