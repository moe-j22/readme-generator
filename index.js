const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown'); // Update the path to generatemarkdown.js

// Create an array of questions for user input
const questions = [
{
    type: 'input',
    name: 'title',
    message: 'Enter the project title:',
},
{
    type: 'input',
    name: 'description',
    message: 'Enter a project description:',
},
{
    type: 'input',
    name: 'installation',
    message: 'Enter installation instructions:',
},
{
    type: 'input',
    name: 'usage',
    message: 'Enter usage information:',
},
{
    type: 'list',
    name: 'license',
    message: 'Choose a license for your application:',
    choices: ['MIT', 'GNU GPL v3', 'Apache 2.0', 'ISC', 'None'],
},
{
    type: 'input',
    name: 'contributing',
    message: 'Enter contribution guidelines:',
},
{
    type: 'input',
    name: 'tests',
    message: 'Enter test instructions:',
},
{
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub username:',
},
{
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
},
];

// Create a function to write README file
function writeToFile(fileName, data) {
fs.writeFile(fileName, data, (err) => {
    if (err) {
    console.error(err);
    } else {
    onsole.log('README.md successfully generated!');
    }
});
}

// Create a function to initialize app
function init() {
inquirer.prompt(questions).then((data) => {
    const markdown = generateMarkdown(data);
    writeToFile('README.md', markdown);
});
}

// Function call to initialize app
init();
