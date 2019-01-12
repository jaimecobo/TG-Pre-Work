var pasta = "Spaghetti"; // ES5 syntax

const meat = "Pancetta"; // ES6 syntax

let sauce = "Eggs and cheese"; // ES6 syntax

// Template literals, like the one below, were introduced in ES6
const carbonara = `You can make carbonara with ${pasta}, ${meat}, and a sauce made with ${sauce}.`;


// THIS LESSON HAS NO CODING EXERCISE, ONLY A TERMINAL CONFIGURATION


/*
To install Babel, we need to npm install two packages, babel-cli and babel-preset-env.
However, npm installs over one hundred other packages that are dependencies for Babel to run properly.
We install Babel with the following two commands:
$ npm install babel-cli -D
$ npm install babel-preset-env -D

The babel-cli package includes command line Babel tools, and the babel-preset-env package has the code that maps any JavaScript feature, ES6 and above (ES6+), to ES5.
The -D flag instructs npm to add each package to a property called devDependencies in package.json.
Once the project's dependencies are listed in devDependencies, other developers can run your project without installing each package separately.
Instead, they can simply run npm install — it instructs npm to look inside package.json and download all of the packages listed in devDependencies.
Once you npm install packages, you can find the Babel packages and all their dependencies in the node_modules folder.
The new directory structure contains the following:
project
|_ node_modules
|___ .bin
|___ ...
|_ src
|___ main.js
|_ package.json
*/
