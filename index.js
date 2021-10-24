// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const { writeFile } = require('./utils/generate-file.js')
// TODO: Create an array of questions for user input
const questions = () => {
    
    return inquirer.prompt([
        {
            type: 'input',
            name: 'projectTitle',
            message: 'What is your projec title? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter your project title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'projectDescription',
            message: 'Provide a description of the project (Required)',
            validate: projectDescriptionInput => {
                if (projectDescriptionInput) {
                    return true;
                } else {
                    console.log('Please enter your project description!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'projectInstallation',
            message: 'Provide installation isntruction for the project (Required)',
            validate: installationInput => {
                if (installationInput) {
                    return true;
                } else {
                    console.log('Please enter the installation instructions!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'projectUsage',
            message: 'Provide instructions and examples for use (Required)',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please provide instructions and examples for use');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'projectContribution',
            message: 'Provide guidelines for contribute with your project',
            validate: contributionInput => {
                if (contributionInput) {
                    return true;
                } else {
                    console.log('Please provide guidelines for contributions');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmTest',
            message: 'Would you like to enter some information about yourself for an "About" section?',
            default: true
        },
        {
            type: 'input',
            name: 'projectTest',
            message: 'Provide instructions  (Required)',
            when: ({confirmTest}) => {
                if (confirmTest) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Choose license for your project',
            choices: ['Boost', 'IBM', 'MIT']
        }
    ])
};

// TODO: Create a function to initialize app
function init() {
    questions()
        .then(data => {
            return generateMarkdown(data)
        })
        .then(fileContent => {
            return writeFile(fileContent)
        })
        .then(writeFileResponse => {
            console.log(writeFileResponse);
        })
        .catch(err => {
            console.log(err);
        })
}



// Function call to initialize app
init()




