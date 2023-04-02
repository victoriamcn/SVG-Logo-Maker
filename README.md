![GitHub License Badge](https://img.shields.io/badge/license-MIT-blue.svg)

# SVG Logo Maker

## Description

This project is a Node.js command-line application that takes in user input to generate a logo and save it as an SVG fileLinks to an external site. The application prompts the user to select a color and shape, provide text for the logo, and save the generated SVG to a .svg file

## Table of Contents
- [User Story](#user-story)
- [Installation](#installation)
- [Tests](#tests)
- [Usage](#usage)
- [Demo](#demo)
- [Contributing](#contributing)
- [Questions](#questions)
- [License](#license)
- [Credits](#credits)

## User Story

```
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer
```

## Installation

To install please run:
```
npm i inquirer@8.2.4
```

## Tests

- Testing: [jest](https://www.npmjs.com/package/jest)

To test please run:
```
npm run test
```

## Usage

1. Clone this repository to your local computer.
2. Open the repo in VS Code.
3. Download the SVG [extension](https://marketplace.visualstudio.com/items?itemName=jock.svg) by JOCK to be able to preview the .svg file (#7).
4. Open the index.js file in the Integrated Terminal.
5. Install [***inquirer***](https://www.npmjs.com/package/inquirer) by typing the following in the command line:
```
npm i inquirer@8.2.4
```
5. Once you have installed inquirer, type the following in the command line:
```
node index.js
```
6. Use the command line to answer the prompts.
7. In the dist folder, the generated file is ***"logo.svg"***.
8. Right-click ***"logo.svg"*** and select "Preview SVG" to preview the file as an image.

## Demo

Click to watch the [demo](https://youtu.be/_wRz3mtKcAc) on YouTube.

## Contributing

To contribute to this project, you may create a git fork.

## Questions

If you have any questions or concerns, you may reach me at ***vmcnorrill@gmail.com***.

To view my other projects, you may visit my Git Hub profile: [victoriamcn](https://github.com/victoriamcn).


## License

***This project is licensed under MIT.*** [Click](https://pitt.libguides.com/openlicensing/MIT#:~:text=Users%20of%20software%20using%20an,and%20the%20X%20Windows%20System.) here to view the license documentation or go to the [license file](https://github.com/victoriamcn/SVG-Logo-Maker/blob/main/LICENSE) in this repository.

## Credits

### Georgia Tech Staff

- My instructor, [Saurav Khatiwada](https://github.com/khatiwadasaurav).
- My tutor, [Neil Dhand](https://github.com/neildhand).

### npm


### Example Code
- For JS Classes: [ThomasCalle on GitHub](https://github.com/ThomasCalle/Thomas-Object-Oriented-Programming-SVG-Logo-Maker/blob/main/index.js)
- For SVG code: [johnxlai on Git Hub](https://github.com/johnxlai/svg-logo-maker/blob/main/lib/generateSvg.js)

### Tutorials
- W3 Schools: [SVG Reference](https://www.w3schools.com/graphics/svg_reference.asp) 
- W3 Schools:  [JavaScript Classes](https://www.w3schools.com/js/js_classes.asp)
- Mozilla SVG: [Basic Shapes](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes)
- Mozilla SVG: [Texts](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Texts)
- StackOverflow: [Create an equilateral triangle using SVG in HTML with base and height 100px](https://stackoverflow.com/questions/54955165/create-a-equilateral-triangle-using-svg-in-html-with-base-and-height-100px)
- StackOverflow: [SVG - how to center a rectangle?](https://stackoverflow.com/questions/53946107/svg-how-to-center-a-rectangle)
- Flavio Copes: [Testing JavaScript with Jest](https://flaviocopes.com/jest/)