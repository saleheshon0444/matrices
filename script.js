// "use strict";
// const matrix = [1, 2];
// const matrix2 = [3, 4, 7];
// const matrix3 = [5, 6];
// // console.log(matrix.length);
// //   console.log(i);
// let sum = [];
// for (let i = 0; i < matrix.length; i++) {
//   for (let z = 0; matrix2.length > z; z++) {
//     for (let x = 0; matrix3.length > x; x++) {
//       sum.push([matrix[i], matrix2[z], matrix3[x]]);
//     }
//   }
// }
// console.log(sum);
// var sum = (r, a) => r.map((b, i) => a[i] + b);

// console.log(
//   [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//   ].reduce(sum)
// );

// Corect Anwser

const matrix = [
  [1, 2, 3],
  [3, 4],
  [1, 2, 3],
  [3, 4],
  [1, 2, 3],
  [3, 4],
];
// const cartesian = (...a) =>
//   a.reduce((a, b) => a.flatMap((d) => b.map((e) => [d, e].flat())));
// console.log(cartesian(...matrix));
function ab(...test) {
  test.reduce((test, b) => console.log(b));
}
ab([1, 2], [3, 4, 5], [6, 7]);
