function iBeforeE(sentence) {
  let chrArr = sentence.split("");
  let n = chrArr.length;
  let i = 0;

  while (i < n) {
    let chr = chrArr[i];

    if (chr === "e") {
      if (chrArr[i + 1] === "i" && chrArr[i - 1] !== "c") {
        let temp = chrArr[i];
        chrArr[i] = chrArr[i + 1];
        chrArr[i + 1] = temp;
        i += 2;
        continue;
      }
    } else if (chr === "i") {
      if (chrArr[i + 1] === "e" && chrArr[i - 1] === "c") {
        let temp = chrArr[i];
        chrArr[i] = chrArr[i + 1];
        chrArr[i + 1] = temp;
        i += 2;
        continue;
      }
    }

    i++;
  }

  return chrArr.join("");
}
