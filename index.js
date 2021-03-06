const fs =require('fs');
const inquirer = require('inquirer');
const generateLicense = require ('./utils/generateMarkdown');

// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
const writeToFile = file=>{
   return`
   ##  ${file.titulo}

   ## Description

   ${file.description}

   ## Table of Contents

   * [Installation](#installation)
   * [Usage](#usage)
   * [Credits](#credits)
   * [License](#license)
   * [Contributing](#contributing)
   * [Test](#test)

   ## Installation
   ${file.installation}

   ## Usage
   ${file.usage}

   ## License
   ${generateLicense(file.license)}

   ## Contributing
   ${file.contributing}

   ## Tests
   ${file.test}

   ## Questions
   For more questions please email to : ${file.email}
   Github Link: https://github.com/${file.github}
   `
};

const createFile = readMeContent =>{
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/readme.md', readMeContent, err => {
          if (err) {
            reject(err);
            return;
          }
    
          resolve({
            ok: true,
            message: 'File created!'
          });
        });
    });
};



// TODO: Create a function to initialize app
const init = () =>{
    return inquirer.prompt([
        {
            type:'input',
            name:'titulo',
            message:'What is your project title?(Required)',
            validate: projectTitleinput=>{
                if (projectTitleinput){
                    return true;
                }else{
                    console.log('Please enter your Project Title.')

                }
            }
        },
        {
            type:'input',
            name:'description',
            message:'Please input the description of your project (Required)',
            validate: descriptionInput=>{
                if (descriptionInput){
                    return true;
                }else{
                    console.log('Please enter a description.')
                }
            }
        },
        {
            type:'input',
            name:'installation',
            message:'What is the installation process? (Required)',
            validate: installationInput=>{
                if (installationInput){
                    return true;
                }else{
                    console.log('Please enter an installation process.')
                }
            }
        },
        {
            type:'input',
            name:'usage',
            message:'Please input usage',
            validate: usageInput => {
                if (usageInput) {
                  return true;
                } else {
                  return false;
                }
              }
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please select the license used on this project?',
            choices: ['MIT', 'GNU APLv3', 'Mozilla Public', 'UnLicense', 'No license'],
            default: 'MIT'
        },
        {
            type:'input',
            name:'contributing',
            message:'How can someone contribute to your application?'
        },
        {
            type:'input',
            name:'test',
            message:'How do you  Test or Run your application?'
        },
        {
            type:'input',
            name:'github',
            message:'Please input github username (Required)',
            validate: githubInput=>{
                if (githubInput){
                    return true;
                }else{
                    console.log('Please enter github user.')
                }
            }
        },
        {
            type:'input',
            name:'email',
            message:'Please input your email (Required)',
            validate: emailInput=>{
                if (emailInput){
                    return true;
                }else{
                    console.log('Please enter your email address.')
                }
            }
        }
    ])
    // .then(answers =>console.log(answers));
};

// Function call to initialize app

init()
    .then(writeToFile)
    .then(createFile) ;
  




// fs.writeFile('./README.md')