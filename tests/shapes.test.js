const Shape = require('../lib/shapes.js')

describe('Shape', () => {
    //test for triangle to have it's color rendered
    it('Should render the color for the triangle', () => {
        const triangle = new Shape.Triangle();
        Shape.Triangle.shapeColor = "white"
        const shapeStr = `<polygon fill="white" points="50 15, 100 100, 0 100" />`

        expect(triangle.render().match(shapeStr));
    })
    it('Should render the color for the circle', () => {
        const circle = new Shape.Circle();
        Shape.Circle.shapeColor = "white"
        const shapeStr = `circle fill="white" cx="50" cy="50" r="50"  />`

        expect(circle.render().match(shapeStr));
    })
    it('Should render the color for the square', () => {
        const square = new Shape.Square();
        Shape.Square.shapeColor = "white"
        const shapeStr = `<rect fill="white" width="200" height="200" />`

        expect(square.render().match(shapeStr));
    })
})











// const generateTest = require('../lib/generateSVG.js')

// // testing suite for Shapes
// describe('generator test', () => {
//     it('should call the init function to generate the SVG logo', () => {
//         const logo = { shape: 'Triangle', shapeColor: 'white', textColor: 'black', text: 'ABC' }
//         const generator = generateTest(logo);

//         expect(generator.next().value).toBe(ABC);
//     });
// })