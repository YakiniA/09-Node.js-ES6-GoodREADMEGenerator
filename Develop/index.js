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
            choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
            name: "licenseType",
            validate: answerValidation
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
            validate: answerValidation
          },
      
        ])
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
    
    }

    function answerValidation(value){
      if(value!=""){
        return true;
      }else{
        return `Please enter the detail`;
      }

    }

// function to write README file
function writeToFile(fileName, data) {
  return writeFileAsync(fileName, data);
}

// function call to initialize program
init();
