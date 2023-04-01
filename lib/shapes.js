class Shape {
    //always use constructor method
    constructor(){
        this.shape
    }

    set(){
        this.shape
    }

}

class Triangle extends Shape {
    render(){
        return `<polygon fill="${shapecolor}" points="150, 18 244, 182 56, 182" />`
       } 
}


class Square extends Shape {
    render(){
        return `<rect fill="${shapecolor}" width="300px" height="175px"/>`
       } 
}


class Circle extends Shape {
    render(){
        return `<circle fill="${shapecolor}" r="150" cx="50" cy="50" />`
       } 
}


//export to other js files
module.exports = { this.shapes };