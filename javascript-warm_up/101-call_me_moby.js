#!/usr/bin/node
exports.callMeMoby = function (times, fun) {
  for (let i = 0; i < times; i++) {
    fun();
  }
};
