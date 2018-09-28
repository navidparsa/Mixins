var Area = /** @class */ (function () {
    function Area() {
    }
    Area.prototype.getArea = function (length, width) {
        return length * width;
    };
    return Area;
}());
var Perimeter = /** @class */ (function () {
    function Perimeter() {
    }
    Perimeter.prototype.getPerimeter = function (length, width) {
        return 2 * (length + width);
    };
    return Perimeter;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(length, width) {
        this.lenght = length;
        this.width = width;
    }
    Rectangle.prototype.Area = function () {
        return this.getArea(this.lenght, this.width);
    };
    Rectangle.prototype.Perimeter = function () {
        return this.getPerimeter(this.lenght, this.width);
    };
    return Rectangle;
}());
function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach(function (baseCtor) {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}
applyMixins(Rectangle, [Area, Perimeter]);
var rectangle = new Rectangle(7, 8);
console.log("Area: " + rectangle.Area());
console.log("Perimeter: " + rectangle.Perimeter());
//# sourceMappingURL=Mixins.js.map