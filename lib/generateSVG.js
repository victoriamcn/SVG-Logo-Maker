const shape = require('./lib/shapes.js')

//function to generate the svg logo
const generateSvg = (shape) => {
    return `
    <svg
    version="1.1"
    width="300px"
    height="200px"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg">
    ${shape.render()}
    <text
    x="50"
    y="50"
    fill=${color.render()}>
    </text>
    </svg>
    `
}



//export to index.js
module.exports = { generateSvg };
