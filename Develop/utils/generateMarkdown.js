// function to generate markdown for README
function generateMarkdown(data) {
return `
# ${data.title}

${data.licenseType}
This is a dynamically generated README file using Command line application

# Description

${data.description}

# Table Of Contents

* [Installation](#Installation)
* [Usage](#Usage)
* [Contribution](#Contribution)
* [Tests](#Tests)
* [License](#License)
* [Questions](#General)

# Installation

${data.installation}

# Usage

${data.usageInfo}

# Contribution

${data.contribution}

# Tests
${data.testInfo}

# License

License used is ${data.licenseType}

For more details regarding Git License Types, please visit [License Types](https://choosealicense.com/licenses/)

# General

GitHub Username : ${data.username}

Link to my GitHub profile : [GitHub Profile](https://github.com/${data.username})

Email : ${data.email}
`;
}

module.exports = generateMarkdown;
