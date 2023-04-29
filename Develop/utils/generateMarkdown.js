// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README //Creating README.md template
function generateMarkdown(data) {
  return `# ${data.title}
by ${data.name}

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributors](#contributors)
* [Testing](#testing)
* [Questions](#questions)

## Description
${data.description}
## Installation
${data.install}
# Usage
${data.usage}
## Contributors
${data.contribution}
## Testing
${data.tests}
## Questions
* Name - ${data.name}
* Email - ${data.email}
* Github - [${data.username}](https://github.com/${data.username}/)
`;
}

module.exports = generateMarkdown;
