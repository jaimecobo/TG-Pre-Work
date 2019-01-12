const robot = {
  _energyLevel: 100,
  recharge(){
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
  }
};
 robot._energyLevel = 'high';
robot.recharge

/*
Certain languages have privacy built-in for objects, but JavaScript does not have this feature.
Rather, JavaScript developers follow naming conventions that signal to other developers how to interact with a property.
One common convention is to place an underscore _ before the name of a property to mean that the property should not be altered.
*/
