#!/usr/bin/node
let numberOfTimes = 0;
exports.logMe = function (item) {
  console.log(numberOfTimes + ': ' + item);
  numberOfTimes += 1;
};
