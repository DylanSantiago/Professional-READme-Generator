// TODO: Create a function to generate markdown for README

// Badge, Link, and License sections are generated from user input
function generateMarkdown(data) {
  let generateBadge = "";
  let generateLink = "";
  let generateSection = "";

 // Based off user selection, the links to generate the badges and information are all declared here.
  if(data.license === "MIT") {
    generateBadge = '<br/>[![License: MIT](https://img.shields.io/badge/License-MIT-red.svg)]';
    generateLink = '(https://opensource.org/licenses/MIT)';
    generateSection = '## Licensed by MIT;';
  } else if (data.license === "Apache 2.0") {
    generateBadge = '<br/>[![License: Apache 2.0](https://img.shields.io/badge/License-Apache-blue.svg)]'
    generateLink = '(https://opensource.org/licenses/Apache-2.0)';
    generateSection = 'Licensed by Apache 2.0';
  } else if (data.license === "Boost Software") {
    generateBadge = '<br/>[![License: Boost Software](https://img.shields.io/badge/License-Boost-green.svg)]'
    generateLink = '(https://opensource.org/licenses/BSL-1.0)';
    generateSection = '## Licensed by Boost Software';
  } else if (data.license === "No license") {
    generateBadge = "";
    generateLink = '';
    generateSection = '';
  };

  // License section is placed on top of the ReadMe underneath the title.
  return `# ${data.title}
  ${generateSection}
  ${generateBadge}${generateLink}

# Table of Contents:
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Tests](#tests)
* [Contribution](#contribution)
* [Questions](#questions)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Tests
${data.tests}

## Contribution
${data.contribution} 

## Questions
Please feel free to follow me on Github: [${data.username}](https://github.com/${data.username}) and if you have any questions or would like to collaborate on a project Email me at ${data.email}
`;
}

module.exports = generateMarkdown;
