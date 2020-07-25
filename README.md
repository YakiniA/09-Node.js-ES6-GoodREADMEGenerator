## Unit 09 Node.js and ES6+ Homework: Good README Generator

This project mainly focuses on dynamically generate a high quality README file using command line application. This allows the project creator to spend less time creating a good README. It accepts the user's input using the [Inquirer package](https://www.npmjs.com/package/inquirer) and also axios call is used for github user validation. [Axios package](https://www.npmjs.com/package/axios) 

### Prerequisite

To install NPM module dependencies, run the command:

```
npm install
```

The application will be invoked with the following command:

```
node index.js
```

### Implementation

* The user will be prompted for information regarding title of project, Description, Installation, Usage, License, Contributing, Tests, and Questions(Github username, email). Used Inquirer for getting user input. 
* When the user types the details, it is being added to the sections of the README entitled Description, Installation, Usage, License,  Contributing, Tests, and Questions.
* When the license for the application is selected from the list of options, 
then a badge for that license is added to the top of the README and the detail is added to the section of the README.
* When the user forgets to enter any detail, then the message "Please enter the detail" will be shown.
* When the Github detail is entered, it is added to the section of README and the link to the GitHub profile is also shown.
* If wrong Github detail is given, then the message "Invalid User" will be shown.
* When the email id is entered, it is added to the section of the README and the details on  how to reach me with additional questions also shown.
* If wrong email id is provided, then the message "Please enter valid email" message is shown.
* On Clicking the links in the Table of Contents, then the corresponding section of the README is shown.

Dynamically Generated README file: [README File](Develop/README.md)

[Watch the video](Develop/RecordedVideo.webm)

##### References

StackOverflow : [StackOverflow - Inquirer validation](https://stackoverflow.com/questions/57321266/how-to-test-inquirer-validation)<br/>
StackOverflow : [StackOverflow - Email validation](https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript)<br/>
Shield.IO License : [Shields.io-License](https://shields.io/category/license)