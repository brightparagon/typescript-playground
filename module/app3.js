"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { pi, calculateCircumference } from "./circle"
var Circle = __importStar(require("./circle"));
var rectangle_1 = require("./rectangle");
console.log(Circle.pi);
console.log(Circle.calculateCircumference(10));
console.log(rectangle_1.calculateRectangle(20, 10));
