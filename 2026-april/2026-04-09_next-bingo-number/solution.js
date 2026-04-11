function getNextBingoNumber(n) {
  const letters = ["B", "I", "N", "G", "0"];
  const number = Number(n.slice(1));

  const next = number === 75 ? 1 : number + 1;
  const letterIndex = Math.floor((next - 1) / 15);

  return `${letters[letterIndex]}${next}`;
}
