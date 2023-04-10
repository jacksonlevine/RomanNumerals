import { RomanNums1 } from "../src/romanNumerals";
import { intToRoman } from "../src/romanNumerals";
import {  ConvertToRomanNumeral } from "../src/romanNumerals";


describe("RomanNums1 method", () => {
  test("It should throw an error if the argument is not a number", () => {
    expect(() => { RomanNums1("", "h"); }).toThrow(TypeError)
  });

  test("It should return XII for 12", () => {
    expect(RomanNums1("",12)).toEqual("XII");
  });

  test("It should return MMMCMXLVI for 3946", () => {
    expect(RomanNums1("", 3946)).toEqual("MMMCMXLVI");
  });

  test("It should return IV for 4", () => {
    expect(RomanNums1("",4)).toEqual("IV");
  });
});

describe("ConvertToRomanNumber", () => {
  test("It should return an error if given a edge case number", () => {
    expect(ConertToRomanlNumeral("This aint a number!".toEqual("Please enter a number")))
  })

  test("It should return some roman numerals", () => {
    expect(ConvertToRomanNumeral(3946)).toEqual("MMMCMXLVI");
  });

  test("It should return some roman numerals", () => {
    expect(ConvertToRomanNumeral(20)).toEqual("XX");
  });

  test("It should return some roman numerals", () => {
    expect(ConvertToRomanNumeral(999)).toEqual("CMXCIX");
  });
});