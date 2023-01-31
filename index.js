let a=5;
let b=8;
console.log(a+b);


Anna Serobyan <anna.serobyan97@gmail.com>
Mo., 30. Jan., 21:05 (vor 18 Stunden)
an anna.serobyan1997

class Department {
  constructor(name) {
    this.name = name;
  }

  show() {
    console.log(`This person name is ${this.name}`);
  }
}

class Employee extends Department {
  constructor(name, salary, jobTitle) {
    super(name);
    this.salary = salary;
    this.jobTitle = jobTitle;
  }

  child_Show() {
    super.show();
    console.log(`Salary is ${this.salary}`);
    console.log(`This employee works as a ${this.jobTitle}`);
  }
}

const employee1 = new Employee("Anna", 50000, "Software Engineer");
const employee2 = new Employee("Aaron", 55000, "Data Scientist");

employee1.child_Show();
employee2.child_Show()