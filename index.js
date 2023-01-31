// let a=5;
// let b=8;
// console.log(a+b);


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
myarr.indexOf();



// console.log(a-b);


// let x = 10;

