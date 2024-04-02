// * basic arrow func syntax is:- () => {},  now holding it in variable so:- const user=() => {}
// * now asssighning the parameters/paranthesis so it look like  :- const user(num1, num2)=> { return num1 + num2}
// * for o/p console.log(user(2,4))
const user=(num1, num2)=>{
    return num1 + num2
}
// console.log(user(2,4));

// * if you use {}curly braces then you must type the return keyword , its called explicite return
// * if u dont use {} then its does not mendatary let see the example
// * till now knowledge its happen in one line of code
const jsclient=(num1, num2,num3,num4)=> 
(num1 + num2 +num3 + num4)
const sub=(num1, num2)=>(
     num1 - num2
)
// console.log(sub(10,1));
// console.log(jsclient(2,4,6,8));





const jsuser = (num1, num2)=>(num1 + num2)
console.log(4-5);