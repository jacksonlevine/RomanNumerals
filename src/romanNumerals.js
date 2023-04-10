export const intToRoman = {
  1: "I",
  4: "IV",
  5: "V",
  9: "IX",
  10: "X",
  40: "XL",
  50: "L",
  90: "XC",
  100: "C",
  400: "CD",
  500: "D",
  900: "CM",
  1000: "M"
}

export function ConvertToRomanNumeral(inputNumber) {
  if (isNaN(inputNumber)) {
    return "Please enter a number"
  }
  if (inputNumber === 0) {
    return "";
  }
  else if (inputNumber / 1000 >= 1){
    const M = Math.floor(inputNumber / 1000);
    return `${intToRoman[1000].repeat(M)}` + ConvertToRomanNumeral(inputNumber - (M * 1000));
  }
  else if (inputNumber / 900 >= 1){
    const CM = Math.floor(inputNumber / 900);
    return `${intToRoman[900].repeat(CM)}` + ConvertToRomanNumeral(inputNumber - (CM * 900));
  }
  else if (inputNumber / 500 >= 1){
    const D = Math.floor(inputNumber / 500);
    return `${intToRoman[500].repeat(D)}` + ConvertToRomanNumeral(inputNumber - (D * 500));
  }
  else if (inputNumber / 400 >= 1){
    const CD = Math.floor(inputNumber / 400);
    return `${intToRoman[400].repeat(CD)}` + ConvertToRomanNumeral(inputNumber - (CD * 400));
  }
  else if (inputNumber / 100 >= 1){
    const C = Math.floor(inputNumber / 100);
    return `${intToRoman[100].repeat(C)}` + ConvertToRomanNumeral(inputNumber - (C * 100));
  }
  else if (inputNumber / 90 >= 1){
    const XC = Math.floor(inputNumber / 90);
    return `${intToRoman[90].repeat(XC)}` + ConvertToRomanNumeral(inputNumber - (XC * 90));
  }
  else if (inputNumber / 50 >= 1){
    const L = Math.floor(inputNumber / 50);
    return `${intToRoman[50].repeat(L)}` + ConvertToRomanNumeral(inputNumber - (L * 50));
  }
  else if (inputNumber / 40 >= 1){
    const XL = Math.floor(inputNumber / 40);
    return `${intToRoman[40].repeat(XL)}` + ConvertToRomanNumeral(inputNumber - (XL * 40));
  }
  else if (inputNumber / 10 >= 1){
    const X = Math.floor(inputNumber / 10);
    return `${intToRoman[10].repeat(X)}` + ConvertToRomanNumeral(inputNumber - (X * 10));
  }
  else if (inputNumber / 9 >= 1){
    const IX = Math.floor(inputNumber / 9);
    return `${intToRoman[9].repeat(IX)}` + ConvertToRomanNumeral(inputNumber - (IX * 9));
  }
  else if (inputNumber / 5 >= 1){
    const V = Math.floor(inputNumber / 5);
    return `${intToRoman[5].repeat(V)}` + ConvertToRomanNumeral(inputNumber - (V * 5));
  }
  else if (inputNumber / 4 >= 1){
    const IV = Math.floor(inputNumber / 4);
    return `${intToRoman[4].repeat(IV)}` + ConvertToRomanNumeral(inputNumber - (IV * 4));
  }
  else if (inputNumber / 1 >= 1){
    const I = Math.floor(inputNumber / 1);
    return `${intToRoman[1].repeat(I)}` + ConvertToRomanNumeral(inputNumber - (I * 1));
  }
}


const intToRoman2 = [
  [1000, "M"],
  [900, "CM"],
  [500, "D"],
  [400, "CD"],
  [100, "C"],
  [90, "XC"],
  [50, "L"],
  [40, "XL"],
  [10, "X"],
  [9, "IX"],
  [5, "V"],
  [4, "IV"],
  [1, "I"],
]

export function RomanNums1(initValueString, inputNumber)
{
  if(!Number.isInteger(inputNumber))
  {
    throw new TypeError("Parameter is not a number");
  }

  for(let i = 0; i < intToRoman2.length; i++) {
    if(inputNumber-intToRoman2[i][0] >= 0)
    {
      inputNumber -= intToRoman2[i][0];
      initValueString += intToRoman2[i][1];
      if(inputNumber == 0)
      {
        return initValueString;
      }
      else{
        
        return initValueStringArr.join("") + RomanNums1([], inputNumber);
      }
    }
  }
}

