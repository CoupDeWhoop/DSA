const isPalindrome = (x) => {
  const string = x.toString();
  return string.split("").reverse().join("") === string;
};

const isPalindromeWithoutString = (input) => {
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

  const reversedInput = getDigit(input, 0);
  return reversedInput === input;
};
