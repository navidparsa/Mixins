class Area {
    getArea(length: number, width: number) {
        return length * width;
    }
}
class Perimeter {
    getPerimeter(length: number, width: number) {
        return 2 * (length + width);
    }
}

class Rectangle implements Area, Perimeter {
    lenght: number;
    width: number;
    constructor(length: number, width: number) {
        this.lenght = length;
        this.width = width;
    }
    getArea: (length: number, width: number) => number;
    getPerimeter: (length: number, width: number) => number;
    Area() {
        return this.getArea(this.lenght, this.width);
    }
    Perimeter(){
        return this.getPerimeter(this.lenght, this.width);
    }
}

function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach(function (baseCtor) {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}


applyMixins(Rectangle, [Area, Perimeter])
let rectangle = new Rectangle(7, 8);
console.log(`Area: ${rectangle.Area()}`);
console.log(`Perimeter: ${rectangle.Perimeter()}`);