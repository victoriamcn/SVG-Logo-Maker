//function to generate the svg logo
//takes in shape as an argument
const generateSvg = (shape, textColor, text) => {
    return `
    <svg version="1.1" width="300px" height="200px" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        ${shape.render()}
        <text x="40%" y="70%" fill="${textColor}" font-size="100%">${text}</text>
    </svg>`
}
//export to index.js
module.exports = { generateSvg };