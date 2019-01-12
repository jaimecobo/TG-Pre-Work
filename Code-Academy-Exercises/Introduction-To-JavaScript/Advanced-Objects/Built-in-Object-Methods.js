const robot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// What is missing in the following method call?
const robotKeys = Object.keys(robot);

console.log(robotKeys);

// Declare robotEntries below this line:
const robotEntries = Object.entries(robot)
console.log(robotEntries);

// Declare newRobot below this line:
const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true}, robot);

console.log(newRobot);

/*
We can also take advantage of built-in methods for Objects!
For example, we have access to object instance methods like: .hasOwnProperty(), .valueOf(), and many more!
There are also useful Object class methods such as Object.assign(), Object.entries(), and Object.keys() just to name a few.
For a comprehensive list, browse: MDN's object instance documentation.
*/
