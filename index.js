let a=5;
let b=8;
console.log(a+b);


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
