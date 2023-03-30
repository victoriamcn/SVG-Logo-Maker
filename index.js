// linking files system, inquirer, lib/
const fs = require('fs');
const inquirer = require('inquirer');
const { colors } = require('./lib/colors.js');
const { generateSVG } = require('./lib/generateSVG.js');
const { shapes } = require('./lib/shapes.js');

// function to initialize app
function init() {
inquirer
    .prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Please enter the text for the logo (Maximum 3 characters):',
        },
        {
            type: 'input',
            name: 'textcolor',
            message: 'Please enter a color for the text:',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape for the logo:',
            choices: ['Triangle', 'Square', 'Circle'],
        },
        {
            type: 'input',
            name: 'shapecolor',
            message: 'Please enter a color for the shape:',
        },
    ])
    .then((response) => {
        const logoPath = './dist/logo.svg';
        const genLogo = makeSvg(response);

        writeToFile(logoPath, generateSVG(genLogo), (err) =>
        err ? console.error(err) : console.log('Successfully generated SVG logo.')
        );
    })
    .catch((err) => {
        console.log('Oops. Something went wrong.');
        console.info(err)
    });
}

// Function call to initialize app
init();