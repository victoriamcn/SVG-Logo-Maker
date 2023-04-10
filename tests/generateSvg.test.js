const generateSvg = require('../lib/generateSvg');
const { Circle } = require('../lib/shapes.js');

describe('generateSvg', () => {
    //test for logo.svg
    it('Should return the logo as an SVG file', () => {
        //
        let shape = new Circle();
        let shapecolor = "white";
        shape.set(shapecolor);
        let textColor = "black";
        let text = "ABC";


        let logo = generateSvg(shape, textColor, text);
        let myLogoStr = `<svg version="1.1" width="300px" height="200px" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">${shape.render()}<text x="40%" y="70%" fill="${textColor}" font-size="100%">${text}</text></svg>`

        expect(logo).toBe(myLogoStr);
    })
})
