// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//function renderLicenseBadge(license) {
//  switch(license) {
//   case "Apache 2.0":
//   license ='<br/>[![License: Apache 2.0](https://img.shields.io/badge/License-Apache-blue.svg)]'
//   return license
//   break;
//   case "MIT":
//   license ='<br/>[![License: MIT](https://img.shields.io/badge/License-MIT-red.svg)]'
//   return license
//   break;
//   case "Boost Software":
//   license ='<br/>[![License: Boost Software](https://img.shields.io/badge/License-Boost-green.svg)]'
//   return license
//   break;
//   case "none":
//   license =" ";
//   return license
//   break;
//  }
//};
//function renderLicenseBadge() {
//  let licenseBadge = "";
//  let licenseLink = "";
//  let licenseSection = "";

//  if(data.license === "MIT") {
//    licenseBadge = '<br/>[![License: MIT](https://img.shields.io/badge/License-MIT-red.svg)]';
//    licenseLink = '(https://opensource.org/licenses/MIT)';
//    licenseSection = '## Licensed by MIT;';
//  } else if (data.license === "Apache 2.0") {
//    licenseBadge = '<br/>[![License: Apache 2.0](https://img.shields.io/badge/License-Apache-blue.svg)]'
//    licenseLink = '(https://opensource.org/licenses/Apache-2.0)';
//    licenseSection = 'Licensed by Apache 2.0';
//  } else if (data.license === "Boost Software") {
//    licenseBadge = '<br/>[![License: Boost Software](https://img.shields.io/badge/License-Boost-green.svg)]'
//    licenseLink = '(https://opensource.org/licenses/BSL-1.0)';
//    licenseSection = '## Licensed by Boost Software';
//  } else if (data.license === "No license") {
//    licenseBadge = "";
//    licenseLink = '';
//    licenseSection = '';
//  };
// };

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {
//  switch(license) {
//   case "Apache 2.0":
//    license ='(https://opensource.org/licenses/Apache-2.0)'
//    return license
//    break;
//    case "MIT":
//    license ='(https://opensource.org/licenses/MIT)'
//    return license
//    break;
//    case "Boost Software":
//    license ='(https://opensource.org/licenses/BSL-1.0)'
//    return license
//    break;
//    case "none":
//    license =" ";
//    return license
//    break;
//  }
// };

//function renderLicenseLink(license) {

//  if(data.license === "Apache 2.0") {
//    license = '(https://opensource.org/licenses/Apache-2.0)'
//    return license
//  } else if (data.license === "MIT") {
//    license = '(https://opensource.org/licenses/MIT)'
//    return license
//  } else if (data.license === "Boost Software") {
//    license = '(https://opensource.org/licenses/BSL-1.0)'
//    return license
//  } else if (data.license === "No license") {
//    license = ""
//    return license
//  };
//}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {
//  switch(license) {
//    case "Apache 2.0":
//    license ="# Apache 2.0\n ## Licensed by Apache 2.0";
//    return license
//    break;
//    case "MIT":
//    license ="MIT\n ## Licensed by MIT";
//    return license
//    break;
//    case "Boost Software":
//    license ="Boost Software\n ## Licensed by Boost Software";
//    return license
//    break;
//    case "none":
//    license =" ";
//    return license
//    break;
//  }
 
//};
//function renderLicenseSection(license) {
//  if(data.license === "Apache 2.0") {
//    license = '## Licensed by Apache 2.0';
//    return license
//  } else if (data.license === "MIT") {
//    license = '## Licensed by MIT;'
//    return license
//  } else if (data.license === "Boost Software") {
//    license = '## Licensed by Boost Software';
//    return license
//  } else if (data.license === "No license") {
//    license = ""
//    return license
//  };
//}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let licenseBadge = "";
  let licenseLink = "";
  let licenseSection = "";

  if(data.license === "MIT") {
    licenseBadge = '<br/>[![License: MIT](https://img.shields.io/badge/License-MIT-red.svg)]';
    licenseLink = '(https://opensource.org/licenses/MIT)';
    licenseSection = '## Licensed by MIT;';
  } else if (data.license === "Apache 2.0") {
    licenseBadge = '<br/>[![License: Apache 2.0](https://img.shields.io/badge/License-Apache-blue.svg)]'
    licenseLink = '(https://opensource.org/licenses/Apache-2.0)';
    licenseSection = 'Licensed by Apache 2.0';
  } else if (data.license === "Boost Software") {
    licenseBadge = '<br/>[![License: Boost Software](https://img.shields.io/badge/License-Boost-green.svg)]'
    licenseLink = '(https://opensource.org/licenses/BSL-1.0)';
    licenseSection = '## Licensed by Boost Software';
  } else if (data.license === "No license") {
    licenseBadge = "";
    licenseLink = '';
    licenseSection = '';
  };

  return `#${data.title}
  ${licenseSection}
  ${licenseBadge}${licenseLink}

# Table of Contents:
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Reference](#reference)
* [Tests](#tests)
* [Contribution](#contribution)
* [Questions](#questions)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.license}

## Reference
${data.reference}

## Tests
${data.tests}

## Contribution
${data.contribution} 

## Questions
Please feel free to follow me on Github: ${data.username} and if you have any questions or would like to collaborate on a project Email me at ${data.email}
`;
}

module.exports = generateMarkdown;
