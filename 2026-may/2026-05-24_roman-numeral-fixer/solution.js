function fixNumerals(str) {
  const romanTable = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  function convertToNumber(str) {
    let num = 0;

    for (let i = 0; i < str.length; i++) {
      num += romanTable[str[i]];
    }

    return num;
  }

  function convertToRoman(num) {
    let str = "";

    for (let key in romanTable) {
      while (num >= romanTable[key]) {
        str += key;
        num -= romanTable[key];
      }
    }

    return str;
  }

  return convertToRoman(convertToNumber(str));
}
