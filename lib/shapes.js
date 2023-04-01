class Shape {
    //always use constructor method
    constructor() {
        this.shapecolor = ''
    }

    set(shapecolor) {
        this.shapecolor = shapecolor; //shapecolor is the name used in index.js prompt
    }

}

//Equilateral Triangle
class Triangle extends Shape {
    render() {
        return `<polygon fill="${this.shapecolor}" points="50 15, 100 100, 0 100" />`
    }
}

//Square
class Square extends Shape {
    render() {
        return `<rect fill="${this.shapecolor}" width="200" height="200" />`
    }
}

//Circle (NOTE: Radius is half of the diameter)
class Circle extends Shape {
    render() {
        return `<circle fill="${this.shapecolor}" r="150px"/>`
    }
}


//export to other js files
module.exports = { Triangle, Circle, Square };