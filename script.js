"use strict";
const matrix = [
  [1, 2],
  [3, 4, 5],
  [2, 0],
];
// console.log(matrix.length);
//   console.log(i);
let sum = 0;
for (let i = 0; i < matrix.length; i++) {
  console.log(matrix[i]);
  for (let z = 0; z < matrix[i].length; z++) {
    console.log(matrix[i][z]);
  }
  //   console.log(sum);
}

// var sum = (r, a) => r.map((b, i) => a[i] + b);

// console.log(
//   [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//   ].reduce(sum)
// );
