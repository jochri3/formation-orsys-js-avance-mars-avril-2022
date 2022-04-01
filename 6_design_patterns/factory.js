const CONSTANTES = Object.freeze({
  DEVELOPER: "developer",
  TESTER: "tester",
});

class Developer {
  constructor(name) {
    this.name = name;
    this.type = CONSTANTES.DEVELOPER;
  }
}

class Tester {
  constructor(name) {
    this.name = name;
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
