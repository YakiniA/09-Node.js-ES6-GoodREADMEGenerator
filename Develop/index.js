const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
// array of questions for user
const questions = [

];
function promptUser(){

        return inquirer.prompt([
          {
            type: "input",
            name: "title",
            message: "What is the title of the project?"
          },
          {
            type: "input",
            message: "Enter the description of the project",
            name: "description"
          },
          {
            type: "input",
            message: "Enter the installation instructions",
            name: "installation"
          },
          {
            type: "input",
            message: "Enter the usage information",
            name: "usage info"
          },
          {
            type: "input",
            message: "Enter contribution guidelines",
            name: "contribution guidelines"
          },
          {
            type: "input",
            message: "Enter test information",
            name: "test info"
          },
          {
            type: "list",
            message: "Select a license type",
            choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
            name: "license type"
          },
          {
            type: "input",
            message: "Enter Github username",
            name: "username"
          },
          {
            type: "input",
            message: "Enter Email Address",
            name: "emailAddress"
          },
        ]);
      }
    promptUser()
      .then(function(answers) {
        console.log(answers);
        const data = generateMarkdown(answers);
        writeToFile("README.md", data);
      })
      .then(function() {
        console.log("Successfully wrote to README.md file");
      })
      .catch(function(err) {
        console.log(err);
      });
    


// function to write README file
function writeToFile(fileName, data) {
  return writeFileAsync(fileName, data);
}

// function to initialize program
function init() {
  promptUser();
}

// function call to initialize program
init();
