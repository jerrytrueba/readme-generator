function init() {

    const fs = require('fs');
    const inquirer = require('inquirer');
    const generate = require('./utils/generateMarkdown.js');
    const path = require('path');

    inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: 'What is the name of your project?',
            },
            {
                type: 'input',
                name: 'description',
                message: 'Please write a brief description of your project.',
            },
            {
                type: 'input',
                name: 'installation',
                message: 'Any installations required?.',
            },
            {
                type: 'input',
                name: 'usage',
                message: 'What will this project be used for?',
            },
            {
                type: 'checkbox',
                name: 'license',
                choices: ["MIT", "Apache"],
                message: 'Please select the appropriate license for the project.',
            },
            {
                type: 'input',
                name: 'contributing',
                message: 'List out those who are contributing, if any.',
            },
            {
                type: 'input',
                name: 'tests',
                message: 'Is a test included in this project?',
            },
            {
                type: 'input',
                name: 'questions',
                message: 'Who can I contact in case of any issues?',
            },
        ])

        .then((response) => {
            return fs.writeFileSync(path.join(process.cwd(), "readme-generator"), generate(response));
        });
}

init();