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
            type: 'input',
            name: 'projectTest',
            message: 'Provide instructions about testing you project (Required)',
            validate: testInput => {
                if (testInput) {
                    return true;
                } else {
                    console.log('Please provide isntructions for testing')
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Choose license for your project',
            choices: ['IBM', 'MIT', 'GNU', 'Apache']
        },
        {
            type: 'input',
            name: 'userGitHub',
            message: 'Please enter your GitHub username',
        },
        {
            type: 'input',
            name: 'userEmail',
            message: 'Please enter your email',  
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




