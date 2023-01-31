// let a=5;
// let b=8;
// console.log(a+b);


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
        console.log(i); 
         }
         console.log(-1); 
        }
     }
     
     forEach(val){
        for(let i = 0; i < this.arr.length; i++){
            if(this.arr[i] ===val){
            return arr[i];
            }
            return -1;
        }

     }
     map(val){
        for(let i = 0; i < this.arr.length; i++){
            if(this.arr[i] ===val){
                return arr[i]*2;
                }
                return -1;
        }
     }
     
}

const myarr= new MyArr(1,2,3,4);
<<<<<<< HEAD
myarr.indexOf();



// console.log(a-b);


// let x = 10;
=======
myarr.map();

console.log(a-b);
console.log(a/b);


>>>>>>> b328b83183406503b4836bcf70eaad86e7e45501

