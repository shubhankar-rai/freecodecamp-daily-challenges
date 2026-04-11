function rookBishopAttack(rook, bishop) {
  if (!rook || !bishop || rook.length !== 2 || bishop.length !== 2) {
    throw new Error("Each position must be a 2-character string (e.g. 'e4')");
  }
  if (rook == bishop) {
    throw new Error("Rook and bishop cannot occupy the same square");
  }

  if (rook[0] === bishop[0] || rook[1] === bishop[1]) {
    return "rook";
  }

  const colDiff = Math.abs(rook.charCodeAt(0) - bishop.charCodeAt(0));
  const rowDiff = Math.abs(rook.charCodeAt(1) - bishop.charCodeAt(1));

  if (colDiff === rowDiff) {
    return "bishop";
  }

  return "neither";
}
