var pasta = "Spaghetti"; // ES5 syntax

const meat = "Pancetta"; // ES6 syntax

let sauce = "Eggs and cheese"; // ES6 syntax

// Template literals, like the one below, were introduced in ES6
const carbonara = `You can make carbonara with ${pasta}, ${meat}, and a sauce made with ${sauce}.`;


// THIS LESSON HAS NO CODING EXERCISE, ONLY A TERMINAL CONFIGURATION


/*
Before we install Babel, we need to setup our project to use the node package manager (npm).
Developers use npm to access and manage Node packages. Node packages are directories that contain JavaScript code written by other developers.
You can use these packages to reduce duplication of work and avoid bugs.
Before we can add Babel to our project directory, we need to run npm init.
The npm init command creates a package.json file in the root directory.
A package.json file contains information about the current JavaScript project.
Some of this information includes:
Metadata — This includes a project title, description, authors, and more.
A list of node packages required for the project — If another developer wants to run your project, npm looks inside package.json and downloads the packages in this list.
Key-value pairs for command line scripts — You can use npm to run these shorthand scripts to perform some process.

If you have Node installed on your computer, you can create a package.json file by typing npm init into the terminal.
*/
