#!/usr/bin/node
const Rectangle = requre('./4-rectangle.js')
class Square extends Rectangle{
    constructor(size){
        super(size, size);

    }
}

module.exports = Rectangle;
