"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var person = /** @class */ (function () {
    function person(name) {
        this.name = name;
        console.log(name + "person constructor");
    }
    person.prototype.run = function () {
        console.log("run....");
    };
    person.talk = function () {
        console.log("talk");
    };
    return person;
}());
var employees = /** @class */ (function (_super) {
    __extends(employees, _super);
    function employees(name) {
        var _this = _super.call(this, name) || this;
        console.log(name + +"employees constructor");
        return _this;
    }
    return employees;
}(person));
var p1 = new person("Son");
p1.run();
person.talk();
console.log(p1.run === person.prototype.run);
var e = new employees("E");
//# sourceMappingURL=lesson9.js.map