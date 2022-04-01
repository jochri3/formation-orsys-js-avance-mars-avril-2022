const CONSTANTES = Object.freeze({
  DEVELOPER: "developer",
  TESTER: "tester",
});

class Personne {
  constructor(fname, lname, age) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
  }
}

class Developer extends Personne {
  constructor(fname, lname, age) {
    super(fname, lname, age);
    this.type = CONSTANTES.DEVELOPER;
  }
}

class Tester {
  constructor(fname, lname, age) {
    super(fname, lname, age);
    this.type = CONSTANTES.TESTER;
  }
}

class EmployeeFactory {
  create(name, type) {
    if (type === CONSTANTES.DEVELOPER) {
      return new Developer(name);
    } else {
      return new Tester(name);
    }
  }
}

const employeeFactory = new EmployeeFactory();

const employees = [];

employees.push(
  employeeFactory.create("Christian Lisangola", CONSTANTES.DEVELOPER)
);
employees.push(employeeFactory.create("Xavier", CONSTANTES.TESTER));
employees.push(employeeFactory.create("Anass L", CONSTANTES.TESTER));
employees.push(employeeFactory.create("Damien Le Guen", CONSTANTES.DEVELOPER));
