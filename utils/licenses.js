const licenseBadge = (data) => {
    if (data == 'MIT') {
      return'[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]'
    } else if (data == 'IBM') {
      return '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)]'
    } else if (data == "GNU") {
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]'  
    }else if (data == 'Apache') {
        return '[![License](https://img.shields.io/badge/License-Apache%202.0-yellowgreen.svg)]'
    }
      return ''
    
}

const licenseLink = (data) => {
    if (data == 'MIT') {
        return '(https://opensource.org/licenses/MIT)'
    } else if (data == 'IBM') { 
        return '(https://opensource.org/licenses/IPL-1.0)'
    } else if (data == 'GNU') {
        return '(https://www.gnu.org/licenses/gpl-3.0)' 
    } else if (data == 'Apache') {
        return '(https://opensource.org/licenses/Apache-2.0)'
    }
        return ''
}

const licenseSection = (data) => {
    if (data == 'MIT') {
        return 'Licensed under the ' + '[MIT](https://opensource.org/licenses/MIT) ' + ' license'
    } else if (data == 'IBM') { 
        return 'Licensed under the ' + '[IBM](https://opensource.org/licenses/IPL-1.0)' + ' license'
    } else if (data == 'GNU') {
        return 'Licensed under the ' + '[GNU](https://www.gnu.org/licenses/gpl-3.0)' + ' license'
    } else if (data == 'Apache') {
        return 'Licensed under the ' + '[Apache](https://opensource.org/licenses/Apache-2.0)' + ' license'
    }
        return ''
}


module.exports = { licenseBadge, licenseLink, licenseSection}