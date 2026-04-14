function getLastLetter(str) {
  const letters = str.match(/[a-z]/gi) ?? [];

  return (
    letters.reduce(
      (best, char) => (char.toUpperCase() > best.toUpperCase() ? char : best),
      "",
    ) || null
  );
}
