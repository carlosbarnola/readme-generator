const licenseFuctions = require('./licenses')

const renderLicenseBadge = licenseFuctions.licenseBadge
const renderLicenseLink = licenseFuctions.licenseLink
const renderLicenseSection = licenseFuctions.licenseSection
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
    # ${data.projectTitle} ${renderLicenseBadge(data.license)} ${renderLicenseLink(data.license)}
    ## Table of Contents
    1. [Description](#Description)
    2. [Installation](#Installation)
    3. [Usage](#Usage)
    4. [Contributing](#Contributing)
    5. [Tests](#Tests)
    6. [License](#License)
    7. [Questions](#Questions)
    ## Description
    ${data.projectDescription}
    ## Installation
    ${data.projectInstallation}
    ## Usage
    ${data.projectUsage}
    ## Contributing
    ${data.projectContribution}
    ## Tests
    ${data.projectTest}
    ## License
    ${renderLicenseSection(data.license)}
    
    ## Questions
    https://github.com/${data.userGitHub}
    Please email ${data.userEmail} for questions.
  `;
}

module.exports = generateMarkdown;
