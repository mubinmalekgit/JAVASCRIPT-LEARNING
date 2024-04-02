// *the functions
// function f(){
//     x = 5;
//     y = 5;
//     z = 5 +5 ;
//     console.log(z);
// }
// f();

                    // * passing obj in func -When you pass an object as a parameter, if the function changes the object's properties, that change is visible outside the function, as shown in the following example:
function myFunc(obj){
    obj.make = "splendor";
};

const mycar ={
    make : "shine",
    prize : "76,000",
};
console.log(mycar.make);
myFunc(mycar);
console.log(mycar.make);

                    // *passing array in the func-

// function myF(theArr){
//     theArr[0] = 35;
// }
//     const arr = [55];
// console.log(arr[0]);
// myF(arr);
// console.log(arr[0])

// function fff(theArry){
//     theArry[0] = 20; //try this:- theArry[20]
// }
//     const arre=[25];
//     console.log(arre[0]);
//     fff(arre);
//     console.log(arre[0]);

                    // function expression 

// const getArea = function(width , height){
//     return getArea(width * height);
// }
// console.log(4*3);

                    // * hoisting in function   
// console.log(square(5));
// function square(n){
//     return n*n;
// }

                    // * function scope
// const num1 = 3;
// const num2 = 2;
// const name = "mubin";
//  //global scope func
// function multiply(){
//     return num1 * num2;
// }
// console.log(multiply());
// // A nested function example
// function getScore() {
//     const num1 = 3;
//     const num2 = 3;
  
//     function add() {
//         return`${name} scored ${num1 + num2}`
//     }
//     return add()
// }
// console.log(getScore())

                       // *THIS KEYWORD

const thisuser = {
    prop1: "mubin",
    func: function(){
        return this.prop1;
    }
}
console.log(thisuser.func());
                    
