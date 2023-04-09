const Logo = require('../lib/generateSvg')

describe('logo', () => {
    //test for logo.svg
    it('Should render the logo as an SVG', () => {
        function Logo (shape, textColor, text) {
            this.shape = shape
            this.textColor = textColor
            this.text = text
            return `
            <svg version="1.1" width="300px" height="200px" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                ${shape}
                <text x="40%" y="70%" fill="${textColor}" font-size="100%">${text}</text>
            </svg>`
        };
        const myLogo = new Logo("triangle","black","ABC");
        // Logo.shape = "triangle"
        // Logo.textColor = "black"
        // Logo.text = "ABC"
        const logoStr = `
        <svg version="1.1" width="300px" height="200px" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <polygon fill="white" points="50 15, 100 100, 0 100" /
        <text x="40%" y="70%" fill="black" font-size="100%">ABC</text>
        </svg>`

        expect(myLogo.render().match(logoStr));
    })
})
