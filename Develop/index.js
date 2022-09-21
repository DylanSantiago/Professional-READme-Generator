// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input // 
const promptUser = () => {
    return inquirer.prompt([
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
         message: 'What is your projects title?',
         name: 'title',
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
         message: 'How did you test your project',
         name: 'tests',
        },

        {
         type: 'input',
         message: 'Can users contribute to your project?',
         name: 'tests',
        },
        
        {
         type: 'list',
         message: 'Is your project licensed? If so, by whom?',
         choices:['Apache 2.0', 'Boost Software','Eclipse Public', 'MIT', 'Mozilla Public', 'No license'],
         name: 'license',
        }, 
    ])
   
    // TODO: Create a function to write README file
    .then((data) => {
    const readMeContent = generateMarkdown(data)
    writeToFile(readMeContent, data)
    fs.writeFileSync('README.md', readMeContent)
    });
};

// TODO: Create a function to initialize app
const init = () => {
    promptUser()
};
// Function call to initialize app
init();
