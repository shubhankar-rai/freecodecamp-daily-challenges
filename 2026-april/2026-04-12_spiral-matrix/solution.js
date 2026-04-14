function spiralMatrix(matrix) {
  if (!matrix.length) return [];

  let flat = [];

  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;

  while (top <= bottom && left <= right) {
    for (let c = left; c <= right; c++) flat.push(matrix[top][c]);

    for (let r = top + 1; r <= bottom; r++) flat.push(matrix[r][right]);

    if (top < bottom) {
      for (let c = right - 1; c >= left; c--) flat.push(matrix[bottom][c]);
    }

    if (left < right) {
      for (let r = bottom - 1; r > top; r--) flat.push(matrix[r][left]);
    }

    top++;
    bottom--;
    left++;
    right--;
  }

  return flat;
}
