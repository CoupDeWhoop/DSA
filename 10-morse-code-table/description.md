# Morse Decoder

The challenge is to implement a function which decodes a morse code string! The morse code will have a space between each letter and three between each word.

### Examples

You can use these examples to start building up your test suite.

```
morseDecode(".... ..");
  // should return "HI"

morseDecode(".... . .-.. .-.. ---");
  // should return "HELLO"

morseDecode("-. --- .-. - .... -.-. --- -.. . .-. ...");
  // should return "NORTHCODERS"

const morse = "--. --- --- -.. -- --- .-. -. .. -. --. -. --- .-. - .... -.-. --- -.. . .-. ...";
morseDecode(morse); // should return "GOOD MORNING NORTHCODERS"
```

## Morse Code Table

| Letter | Code  |
| ------ | ----- |
| A      | .-    |
| B      | -...  |
| C      | -.-.  |
| D      | -..   |
| E      | .     |
| F      | ..-.  |
| G      | --.   |
| H      | ....  |
| I      | ..    |
| J      | .---  |
| K      | -.-   |
| L      | .-..  |
| M      | --    |
| N      | -.    |
| O      | ---   |
| P      | .--.  |
| Q      | --.-  |
| R      | .-.   |
| S      | ...   |
| T      | -     |
| U      | ..-   |
| V      | ...-  |
| W      | .--   |
| X      | -..-  |
| Y      | -.--  |
| Z      | --..  |
| 0      | ----- |
| 1      | .---- |
| 2      | ..--- |
| 3      | ...-- |
| 4      | ....- |
| 5      | ..... |
| 6      | -.... |
| 7      | --... |
| 8      | ---.. |
| 9      | ----. |

### Extra credit

Extend the function to take a third argument toMorse which is a boolean and convert a string to morse code.
