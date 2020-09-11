"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var f = function (message) {
    var colors = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        colors[_i - 1] = arguments[_i];
    }
    console.log(message);
    for (var i in colors) {
        console.log(colors[i]);
        console.log(colors);
    }
};
var msg = "Hello";
f(msg, "Red");
f(msg, "Red", "Green");
f(msg, "Red", "Green", "Yellow");
var fu = function (message) {
    var colors = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        colors[_i - 1] = arguments[_i];
    }
    console.log(message);
    for (var i in colors) {
        console.log(colors[i]);
    }
};
var msg1 = "Hello";
var colors = ["Red", "Green", "Yellow"];
fu.apply(void 0, __spreadArrays([msg1], colors));
//# sourceMappingURL=lesson7.js.map