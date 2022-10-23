// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create a function to write README file
function writeToFile(readMeContent, data) {
fs.writeFileSync('README.md', readMeContent)  
}


// TODO: Create an array of questions for user input // 
const promptUser = () => {
    return inquirer.prompt([
        {
         type: 'input',
         message: 'What is your Github username?',
         name: 'username',
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
         name: 'installation',
        },

        {
         type: 'input',
         message: 'Reproduce the steps to utilize your application.',
         name: 'usage',
        },

        {
         type: 'input',
         message: 'Please add any references that helped you complete this project.',
         name: 'reference',
        },

        {
         type: 'input',
         message: 'How did you test your project',
         name: 'tests',
        },

        {
         type: 'input',
         message: 'Can users contribute to your project?',
         name: 'contribution',
        },
        
        {
         type: 'list',
         message: 'Is your project licensed? If so, by whom?',
         choices:['Apache 2.0', 'MIT','Boost Software', 'No license'],
         name: 'license',
        }, 
    ])
   
    .then((data) => {
    const readMeContent = generateMarkdown(data)
    writeToFile(readMeContent, data)
    fs.writeFileSync('README.md', readMeContent)
    console.log('Successfully created README.md!')
    });
};

// TODO: Create a function to initialize app
const init = () => {
    promptUser()
};
// Function call to initialize app
init();
