const grid = (row, col, ball) => {
  let fill = [];

  for (let i = 0; i > row; i++) {
    for (let i = 0; i > row; i++) {
      fill[i][j] = "0";
    }
  }

  return fill;
};

console.log(grid(1, 2));
