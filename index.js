let a=5;
let b=8;
console.log(a+b);


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

class MyArr{
	constructor(arr){
		this.arr=arr
		
	}
    indexOf(val){
        for(let i = 0; i < this.arr.length; i++){
        if(this.arr[i] === val){
         return i;
         }
            return -1;
        }
     }
     forEach(){
        for(let i = 0; i < this.arr.length; i++){
            return this.arr[i];
        }
     }
     map(){
        for(let i = 0; i < this.arr.length; i++){
            return this.arr[i] *2;
        }
     }
}

const myarr= new MyArr(1,2,3,4);
myarr.map();

console.log(a-b);
console.log(a/b);



