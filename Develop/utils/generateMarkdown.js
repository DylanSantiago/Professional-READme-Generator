// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
   case "Apache 2.0":
   license ="https://img.shields.io/badge/License-Apache-blue";
   return license
   break;
   case "MIT":
   license ="https://img.shields.io/badge/License-MIT-red";
   return license
   break;
   case "Boost Software":
   license ="https://img.shields.io/badge/License-Boost-green";
   return license
   break;
   case " ":
   license =" ";
   return license
   break;
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
   case "Apache 2.0":
    license ="https://opensource.org/licenses/Apache-2.0";
    return license
    break;
    case "MIT":
    license ="https://opensource.org/licenses/MIT";
    return license
    break;
    case "Boost Software":
    license ="https://opensource.org/licenses/BSL-1.0";
    return license
    break;
    case " ":
    license =" ";
    return license
    break;
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch(license) {
    case "Apache 2.0":
    license ="# Apache 2.0\n ## Licensed by Apache 2.0";
    return license
    break;
    case "MIT":
    license ="MIT\n ## Licensed by MIT";
    return license
    break;
    case "Boost Software":
    license ="Boost Software\n ## Licensed by Boost Software";
    return license
    break;
    case " ":
    license =" ";
    return license
    break;
  }
 
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  renderLicenseBadge(data.license)
  renderLicenseSection(data.license)
  renderLicenseLink(data.license)
  return `# ${data.title} 
# Table of Contents:
* [Description](#description)
* [Installation](#install)
* [Usage](#usage)
* [License](#license)
* [Reference](#creds)
* [Tests](#tests)
* [Contribution](#add)
* [Questions](#username)

## Description
${data.description}

## Installation
${data.install}

## Usage
${data.usage}

## License
${data.license}

## Reference
${data.creds}

## Tests
${data.tests}

## Contribution
${data.add} 

## Questions
Please feel free to follow me on Github:${data.username} and if you have any questions or would like to collaborate on a project Email me at ${data.email}
`;
}

module.exports = generateMarkdown;
