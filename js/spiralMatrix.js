function generateSpiralMatrix(n) {
  // Create empty n x n matrix
  const matrix = Array.from({ length: n }, () => Array(n).fill(0));

  let num = 1;
  let top = 0,
    bottom = n - 1,
    left = 0,
    right = n - 1;

  while (top <= bottom && left <= right) {
    // 1. Left ➝ Right
    for (let i = left; i <= right; i++) {
      matrix[top][i] = num++;
    }
    top++;

    // 2. Top ➝ Bottom
    for (let i = top; i <= bottom; i++) {
      matrix[i][right] = num++;
    }
    right--;

    // 3. Right ➝ Left
    for (let i = right; i >= left; i--) {
      matrix[bottom][i] = num++;
    }
    bottom--;

    // 4. Bottom ➝ Top
    for (let i = bottom; i >= top; i--) {
      matrix[i][left] = num++;
    }
    left++;
  }

  return matrix;
}

// Example:
const n = 3;
const result = generateSpiralMatrix(n);

// Print it nicely:
result.forEach((row) => console.log(row.join(" ")));
