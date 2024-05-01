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
  for (let z = matrix.length - 1; z > -1; z--) {
    console.log(matrix[z]);
  }
}

// var sum = (r, a) => r.map((b, i) => a[i] + b);

// console.log(
//   [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//   ].reduce(sum)
// );
