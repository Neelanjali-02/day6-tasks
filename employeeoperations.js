"use strict";
exports.__esModule = true;
exports.employeeoperations = void 0;
var employeeoperations = /** @class */ (function () {
    function employeeoperations() {
    }
    employeeoperations.prototype.addemployee = function () {
        console.log("add");
    };
    employeeoperations.prototype.updateemployee = function () {
        console.log("update");
    };
    employeeoperations.prototype.deleteemployee = function () {
        console.log("delete");
    };
    return employeeoperations;
}());
exports.employeeoperations = employeeoperations;
console.log("enter the choice");
console.log("1.add");
console.log("2.update");
console.log("3.delete");
var input = window.prompt("enter the input");
var po = new employeeoperations;
switch (input) {
    case '1':
        po.addemployee();
        break;
    case '2':
        po.updateemployee();
        break;
    case '3':
        po.deleteemployee();
        break;
}
