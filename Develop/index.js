// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
inquirer
  .prompts([
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'githubName',
    },

    {
        type: 'input',
        message: 'What is your Email?',
        name: 'email',
    },
    
    {
        type: 'input',
        message: 'What is the name of your Github repository?',
        name: 'githubRepo',
    },

    {
        type: 'input',
        message: 'Describe your project.',
        name: 'description',
    },

    {
        type: 'input',
        message: 'What steps are necessary to install your project?',
        name: 'install',
    },

    {
        type: 'input',
        message: 'Reproduce the steps to utilize your application.',
        name: 'usage',
    },

    {
        type: 'input',
        message: 'Please add any references that helped you complete this project.',
        name: 'creds',
    },

    {
        type: 'input',
        message: 'How did you test your project?',
        name: 'tests',
    },

    {
        type: 'input',
        message: 'How did you test your project?',
        name: 'tests',
    },

    {
        type: 'input',
        message: 'How did you test your project?',
        name: 'tests',
    },
]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
