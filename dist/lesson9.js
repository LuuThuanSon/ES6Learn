"use strict";
var person = /** @class */ (function () {
    function person(name) {
        this.name = name;
        console.log(name);
    }
    person.prototype.run = function () {
        console.log("run....");
    };
    person.talk = function () {
        console.log("talk");
    };
    return person;
}());
var p1 = new person("Son");
p1.run();
person.talk();
console.log(p1.run === person.prototype.run);
//# sourceMappingURL=lesson9.js.map