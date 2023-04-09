const SVG = require('../lib/generateSvg')

describe('SVG', () => {
    //test for triangle to have it's color rendered
    it('Should render the SVG file', () => {
        const triangle = new Shape.Triangle();
        Shape.Triangle.shapeColor = "white"
        const shapeStr = `<polygon fill="white" points="50 15, 100 100, 0 100" />`

        expect(triangle.render().match(shapeStr));
    })
})
