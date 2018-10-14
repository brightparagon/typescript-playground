"use strict";
var MyMath;
(function (MyMath) {
    var PI = 3.141592;
    function calculateCircumference(diameter) {
        return diameter * PI;
    }
    MyMath.calculateCircumference = calculateCircumference;
})(MyMath || (MyMath = {}));
