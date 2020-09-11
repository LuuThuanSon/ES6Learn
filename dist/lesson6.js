"use strict";
var geta = function () { return 2; };
var add = function (c, c1, c2) {
    if (c === void 0) { c = 1; }
    if (c1 === void 0) { c1 = 2 * geta(); }
    if (c2 === void 0) { c2 = 3; }
    console.log(c + c1 + c2);
};
add();
add(10);
add(10, 20);
add(10, 20, 30);
//# sourceMappingURL=lesson6.js.map