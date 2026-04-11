function rookAttack(rook1, rook2) {
  if (!rook1 || !rook2 || rook1.length !== 2 || rook2.length !== 2) {
    throw new Error("Each position must be a 2-character string (e.g. 'e4')");
  }
  if (rook1 === rook2) {
    throw new Error("Two rooks cannot occupy the same square.");
  }

  if (rook1[0] === rook2[0] || rook1[1] === rook2[1]) {
    return true;
  }

  return false;
}
