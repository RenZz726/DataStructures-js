function transpose(matrix) {
  const transpose = [];

  for (let i = 0; i < matrix[0].length; i++) {
    transpose[i] = [];
    for (let j = 0; j < matrix.length; j++) {
      transpose[i][j] = matrix[j][i];
    }
  }
  return transpose;
}

console.log(
  transpose([
    [2, 9, 0],
    [7, 1, 5],
  ])
);
