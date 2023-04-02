// linking files system, inquirer, lib/
const fs = require('fs');
const inquirer = require('inquirer');
const { generateSvg } = require('./lib/generateSvg.js');
const { Triangle, Circle, Square } = require('./lib/shapes.js');

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
            //error for more than 3 characters
            if (text.length > 3) {
                console.log('Text exceeds character amount. Please type no more than 3 characters.');
                throw new Error ("Text exceeds character amount. Please type no more than 3 characters.");
            }
            // Path to place gen logo in 
            const logoPath = './dist/logo.svg';
            let shape;
            // hot to generate the shape
            if (response.shape === 'Triangle') {
                shape = new Triangle();
            } else if (response.shape === 'Square') {
                shape = new Square();
            } else {
                shape = new Circle();
            }

            shape.set(response.shapecolor)

            fs.writeFile(logoPath, generateSvg(shape, response.textcolor, response.text), (err) =>
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