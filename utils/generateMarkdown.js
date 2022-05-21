// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
    const licenseType = data.license[0];
    let licenseString = " "
    if (licenseType === "MIT") {
        licenseString = '![License: MIT] (https://img.shields.io/badge/badge-license-green.svg)'
    };
    if (licenseType === "Apache") {
        licenseString = '![License: Apache] (https://img.shields.io/badge/badge-license-blue.svg)'
    };
    return licenseString
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}

## Table of Contents:
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [License](#license)
6. [Questions](#questions)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

## License
${renderLicenseBadge(data)}

## Questions
${data.questions}
`;
}
module.exports = generateMarkdown;