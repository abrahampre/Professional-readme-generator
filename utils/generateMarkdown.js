// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  if (license === "MIT"){
   console.log ("is working")
   return `
   ![mitBadge](https://img.shields.io/badge/license-MIT-green)
   `
 } else if (license==="GNU APLv3"){
   return `
   ![GNUBadge](https://img.shields.io/badge/license-GNU%20APLv3-green)
   `
 } else if (license==="Mozilla Public"){
  return `
  ![GNUBadge](https://img.shields.io/badge/license-Mozilla%20P-green)
  `
 }else if (license==="UnLicense"){
  return `
  ![Un](https://img.shields.io/badge/license-Un%20Lincense-green)
  `
 }else{
   return ``
 }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT"){
    console.log ("is working")
    return `
    MIT License Link : https://choosealicense.com/licenses/mit/
    `
  } else if (license==="GNU APLv3"){
    return `
    GNU APLv3 License Link: https://spdx.org/licenses/AGPL-3.0-or-later.html
    `
  } else if (license==="Mozilla Public"){
   return `
   Mozilla Public License Link: https://spdx.org/licenses/MPL-2.0.html
   `
  }else if (license==="UnLicense"){
   return `
   The Unicense Link: https://spdx.org/licenses/Unlicense.html
   `
  }else{
    return ``
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ${renderLicenseBadge(data)}
  ${renderLicenseLink(data)}
  
  `
}

module.exports = generateMarkdown;
