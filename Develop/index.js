// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            message: "What is the title of your project?",
            name: 'title'
        },
        {
            type: 'input',
            message: "Please enter a description of your project.",
            name: 'description'
        },
        {
            type: 'input',
            message: "Installation instructions?",
            name: 'installation'
        },
        {
            type: 'input',
            message: "Project usage?",
            name: 'usage'
        },
        {
            type: 'input',
            message: "Contribution information?",
            name: 'contribution'
        },
        {
            type:'input',
            message: 'Testing instructions?',
            name: 'tests'
        },
        {
            type: 'list',
            message: "What license would you like to attribute to your project?",
            name: 'license',
            choices: ['MIT', 'Apache', 'Boost', 'BSD']
        },
        {
            type: 'input',
            message: "Enter github username",
            name: 'username'
        },
        {
            type: 'input',
            message: "Enter email",
            name: 'email'
        }
    ])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
