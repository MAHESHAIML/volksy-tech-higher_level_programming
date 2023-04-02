#!/usr/bin/node
function secondBiggest (x, y, ...manyMoreArgs) {
  const descendingList = manyMoreArgs.sort(function (a, b) { return b - a; });
  console.log(descendingList[1]);
}

const allArgs = process.argv;

if (allArgs.length > 3) {
  secondBiggest(...allArgs);
} else {
  console.log(0);
}
