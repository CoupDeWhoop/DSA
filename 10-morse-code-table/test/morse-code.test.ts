import morseCode from "../src/morse-code";

describe("morse code", () => {
  it('should return correctly for ".-', () => {
    expect(morseCode(".-")).toBe("A");
  });

  it('should return correctly for "-..."', () => {
    expect(morseCode("-...")).toBe("B");
  });

  it("should handle empty input", () => {
    expect(morseCode("")).toBe("");
  });

  it("should handle one space", () => {
    expect(morseCode(" ")).toBe("");
  });

  it.each([
    [".... . .-.. .-.. ---", "HELLO"],
    ["-. --- .-. - .... -.-. --- -.. . .-. ...", "NORTHCODERS"],
    [".... . .-.. .-.. ---   .-- --- .-. .-.. -..", "HELLO WORLD"],
    [
      "--. --- --- -..   -- --- .-. -. .. -. --.   -. --- .-. - .... -.-. --- -.. . .-. ...",
      "GOOD MORNING NORTHCODERS",
    ],
  ])("given %s should retun %s", (input, expected) => {
    expect(morseCode(input)).toBe(expected);
  });

  it("handles faulty entry code", () => {
    expect(morseCode("-....- .... . .--.-.- .-.. --- -....-")).toBe("#HE#LO#");
  });

  it.each([
    ["HELLO", ".... . .-.. .-.. ---"],
    ["NORTHCODERS", "-. --- .-. - .... -.-. --- -.. . .-. ..."],
    ["HELLO WORLD", ".... . .-.. .-.. ---   .-- --- .-. .-.. -.."],
    [
      "GOOD MORNING NORTHCODERS",
      "--. --- --- -..   -- --- .-. -. .. -. --.   -. --- .-. - .... -.-. --- -.. . .-. ...",
    ],
  ])("given %s should return %s", (input, expected) => {
    expect(morseCode(input, true)).toBe(expected);
  });
});
