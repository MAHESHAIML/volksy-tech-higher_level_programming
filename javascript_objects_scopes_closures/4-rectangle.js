#!/usr/bin/node
class Rectangle {
  constructor (w, h) {
    if (w > 0 && h > 0) {
      this.width = w;
      this.height = h;
      this.print = function () {
        for (let i = 0; i < this.height; i++) {
          console.log('X'.repeat(this.width));
        }
      };
      this.rotate = function () {
        const fixed = this.height;
        this.height = this.width;
        this.width = fixed;

        for (let i = 0; i < this.height; i++) {
          console.log('X'.repeat(this.width));
        }
      };
      this.double = function () {
        this.width = w * 2;
        this.height = h * 2;
        for (let i = 0; i < this.height; i++) {
          console.log('X'.repeat(this.width));
        }
      };
    }
  }
}

module.exports = Rectangle;
