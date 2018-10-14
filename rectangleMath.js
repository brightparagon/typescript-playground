"use strict";
var MyMath;
(function (MyMath) {
    function calculateRectangle(width, height) {
        return width * height;
    }
    MyMath.calculateRectangle = calculateRectangle;
})(MyMath || (MyMath = {}));
