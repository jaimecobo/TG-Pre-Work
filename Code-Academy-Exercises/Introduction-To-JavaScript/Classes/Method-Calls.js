class Surgeon {
  constructor(name, department) {
    this._name = name;
    this._department = department;
    this._remainingVacationDays = 20;
  }

  get name() {
    return this._name;
  }

  get department() {
    return this._department;
  }

  get remainingVacationDays() {
    return this._remainingVacationDays;
  }

  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');
const surgeonDurant = new Surgeon('Durant', 'Orthopedics');

console.log(surgeonCurry.name);
console.log(surgeonCurry.takeVacationDays(3));
console.log(surgeonCurry.remainingVacationDays);

/*
The syntax for calling methods and getters on an instance is the same as calling them on an object — append the instance with a period,
then the property or method name. For methods, you must also include opening and closing parentheses.
*/
