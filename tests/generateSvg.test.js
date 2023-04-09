const generateSvg = require('../lib/generateSvg')

describe('generateSvg', () => {
    //test for logo.svg
    it('Should return the logo as an SVG file', () => {
        let logo = generateSvg('circle', 'black', 'ABC');
        let myLogoStr = `<svg version="1.1" width="300px" height="200px" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle fill="white" cx="50" cy="50" r="50" /><text x="40%" y="70%" fill="black" font-size="100%">ABC</text></svg>`

        expect(logo).toBe(myLogoStr);
    })
})
