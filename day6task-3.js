var area = /** @class */ (function () {
    function area() {
    }
    area.prototype.circle = function () {
        console.log("the area of circle is 3.14*r*r");
    };
    area.prototype.square = function () {
        console.log("the area of square is s*s");
    };
    area.prototype.rectangle = function () {
        console.log("the area of rectangle is l*b");
    };
    return area;
}());
var x = new area();
x.circle();
x.square();
x.rectangle();
