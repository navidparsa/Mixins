//class Area and class Perimeter act as our mixins,
//each one is focoused on special capability
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
//class Rectangle uses implement instead of using extends
//this means two class traets as interface and class Rectangle should be implement two classes
//by using mixins we avoid the implementation
class Rectangle implements Area, Perimeter {
    lenght: number;
    width: number;
    constructor(length: number, width: number) {
        this.lenght = length;
        this.width = width;
    }
    //we should implement properties and funcions of base class in the rectangle class to avoid error
    //simple implement is satisfactory
    //in the runtime these implementation replacing with the exact implementation of functions and properties in the base classes  
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

//replacing the exact functions and propertiese implementation of base class in the child class
applyMixins(Rectangle, [Area, Perimeter])
let rectangle = new Rectangle(7, 8);
console.log(`Area: ${rectangle.Area()}`);
console.log(`Perimeter: ${rectangle.Perimeter()}`);
