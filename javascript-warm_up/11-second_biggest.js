#!/usr/bin/node
function secondBiggest (x, y, ...manyMoreArgs) {
  console.log(manyMoreArgs);
  const descendingList = manyMoreArgs.sort(function (a, b) { return b - a; });
  console.log(descendingList[1]);
}

const allArgs = process.argv;
console.log(allArgs);

if (allArgs.length > 2) {
  secondBiggest(...allArgs);
} else {
  console.log('0');
}
