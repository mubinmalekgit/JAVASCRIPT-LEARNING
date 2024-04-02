// * spread operators
let studentNames = ["amar", "akbar", "anthany"];
let names = [...studentNames];
console.log(names); 

// *continue...

const obj1={1:"a", 2:"b",3:"c" };
const obj2={4:"d", 5:"b",6:"c" };
const obj3={7:"a", 8:"b",9:"c"};

const obj4 = {...obj1, ...obj2, ...obj3}
console.log(obj4);

                    // * ternary operators
(i==1) ? console.log("hiii") : "byy";