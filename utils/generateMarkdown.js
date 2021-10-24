const licenseFuctions = require('./licenses')

const renderLicenseBadge = licenseFuctions.licenseBadge
const renderLicenseLink = licenseFuctions.licenseLink
const renderLicenseSection = licenseFuctions.licenseSection

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
    # ${data.projectTitle} ${renderLicenseBadge(data.license)}${renderLicenseLink(data.license)}
    
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
    https://github.com/${data.userGitHub}\n
    Please email ${data.userEmail} for questions.
  `;
}

module.exports = generateMarkdown;
