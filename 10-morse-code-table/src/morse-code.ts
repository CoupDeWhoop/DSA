import { MORSE_CODE, ALPHABET_TO_MORSE } from "./morse-code-dictionary";

function deCodeMorse(morse: string) {
  const convertMorseWord = (word: string) =>
    word
      .split(" ")
      .map((letter) => MORSE_CODE[letter] || "#")
      .join("");

  return morse.trim().split("   ").map(convertMorseWord).join(" ");
}

function encodeMorse(sentence: string) {
  const convertWord = (word: string) =>
    word
      .split("")
      .map((letter) => ALPHABET_TO_MORSE[letter])
      .join(" ");

  return sentence.trim().split(" ").map(convertWord).join("   ");
}

function morseCodeConverter(string: string, toMorse?: boolean) {
  if (string.trim() === "") return "";

  return toMorse ? encodeMorse(string) : deCodeMorse(string);
}

export default morseCodeConverter;
