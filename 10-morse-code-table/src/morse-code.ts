import { MORSE_TO_ALPHABET, ALPHABET_TO_MORSE } from "./morse-code-dictionary";

function morseCodeConverter(string: string, toMorse?: boolean) {
  if (string.trim() === "") return "";
  return toMorse ? encodeMorse(string) : decodeMorse(string);
}

function encodeMorse(sentence: string): string {
  return sentence
    .toUpperCase()
    .trim()
    .split(" ")
    .map((word) => encodeWordToMorse(word))
    .join("   ");
}

function encodeWordToMorse(word: string) {
  return word
    .split("")
    .map((letter) => ALPHABET_TO_MORSE[letter])
    .join(" ");
}

function decodeMorse(morse: string): string {
  return morse
    .trim()
    .split("   ")
    .map((word) => decodeMorseWord(word))
    .join(" ");
}

function decodeMorseWord(morseWord: string): string {
  return morseWord
    .split(" ")
    .map((morseLetter) => MORSE_TO_ALPHABET[morseLetter] || "#")
    .join("");
}

export default morseCodeConverter;
