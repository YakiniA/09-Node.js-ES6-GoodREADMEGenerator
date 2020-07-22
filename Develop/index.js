var generateMarkdown = require("./utils/generateMarkdown.js");
const inquirer = require("inquirer"); 
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
// array of questions for user
const questions = [

];
// function to initialize program
function init() {
  
        inquirer.prompt([
          {
            type: "input",
            name: "title",
            message: "What is the title of the project?",
            validate: answerValidation
          },
          {
            type: "input",
            message: "Enter the description of the project",
            name: "description",
            validate: answerValidation
          },
          {
            type: "input",
            message: "Enter the installation instructions",
            name: "installation",
            validate: answerValidation
          },
          {
            type: "input",
            message: "Enter the usage information",
            name: "usageInfo",
            validate: answerValidation
          },
          {
            type: "input",
            message: "Enter contribution guidelines",
            name: "contribution",
            validate: answerValidation
          },
          {
            type: "input",
            message: "Enter test information",
            name: "testInfo",
            validate: answerValidation
          },
          {
            type: "list",
            message: "Select a license type",
            choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'BSD', 'Apache','Mozilla', 'MIT', 'Boost', 'Unlicense'],
            name: "licenseType",
            validate: answerValidation,
            validate: licenseBadge
          },
          {
            type: "input",
            message: "Enter Github username",
            name: "username",
            validate: answerValidation
          },
          {
            type: "input",
            message: "Enter Email Address",
            name: "emailAddress",
            validate: answerValidation,
            validate: emailValidation
          },
      
        ])
       .then((answers) => {
        console.log(answers);
        answers.title = answers.title.trim();
        answers.description = answers.description.trim();
        answers.installation =  answers.installation.trim();
        answers.usageInfo = answers.usageInfo.trim();
        answers.contribution = answers.contribution.trim();
        answers.testInfo = answers.testInfo.trim();
        answers.username = answers.username.trim();
        answers.emailAddress = answers.emailAddress.trim();
        const data = generateMarkdown(answers);
        writeToFile("README.md", data);
      })
      .then(() => {
        console.log("Successfully wrote to README.md file");
      })
      .catch((err) => console.log(err));
    }

    function answerValidation(value){
      if(value!="") return true;
      else return `Please enter the detail`;
    }
    
    function emailValidation(value){
      var mailformat = /\S+@\S+\.\S+/;
      if(value.match(mailformat))
       return true;
     
      else
      return `Please enter valid email`;
    }

    function licenseBadge(value){
        switch (value) {
        case "GNU AGPLv3":
         data.licenseType= `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;

        break;

        case "GNU GPLv3":

        break;

        case "GNU LGPLv3":

        break;

        case "GNU BSD":

        break;

        case "Apache":

        break;
        case "Mozilla":

        break;

        case "MIT":

        break;
        case "Boost":

        break;
        case "Unlicense":
         data.licenseType =  `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;


        break;
              
        default:
        break;
        }
        }

// function to write README file
function writeToFile(fileName, data) {
  return writeFileAsync(fileName, data);
}

// function call to initialize program
init();
