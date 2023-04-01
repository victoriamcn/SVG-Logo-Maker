const generatorTest = require('../generateSvg.js')

// testing suite for Shapes
describe('generator test', () => {
    it('should call the init function to generate the SVG logo', () => {
        const logo = { shape: 'Triangle', shapeColor: 'white', textColor: 'black', text: 'ABC' }
        const generator = generatorTest(logo, {});

        expect(generator.next().value).toBe(ABC);
    });
})