function isFizzBuzz(arr) {
  let startVal;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      startVal = arr[i] - i;
      break;
    }
  }

  if (startVal === undefined) return false;

  for (let i = 0; i < arr.length; i++) {
    if (startVal % 15 === 0) {
      if (arr[i] !== "FizzBuzz") return false;
    } else if (startVal % 3 === 0) {
      if (arr[i] !== "Fizz") return false;
    } else if (startVal % 5 === 0) {
      if (arr[i] !== "Buzz") return false;
    } else {
      if (arr[i] !== startVal) return false;
    }
    startVal++;
  }

  return true;
}
