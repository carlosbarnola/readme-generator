const licenseBadge = (data) => {
    if (data == 'MIT') {
      return'[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]'
    } else if (data == 'IBM') {
      return '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)]'
    } 
      return ''
    
}

const licenseLink = (data) => {
    if (data == 'MIT') {
        return '(https://opensource.org/licenses/MIT)'
    } else if (data == 'IBM') { 
        return '(https://opensource.org/licenses/IPL-1.0)'
    }
        return ''
}

const licenseSection = (data) => {
    if (data == 'MIT') {
        return '(https://opensource.org/licenses/MIT)'
    } else if (data == 'IBM') { 
        return '(https://opensource.org/licenses/IPL-1.0)'
    }
        return ''
}


module.exports = { licenseBadge, licenseLink, licenseSection}