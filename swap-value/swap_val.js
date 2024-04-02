// let a =5;
// let b = 10;
// console.log(a, b);
// let a = 10;
// let b = 5;


// var temp = a;
// var a = b;
// var b = temp;
                    // * with 3rd variable
// let a =5;
// let b = 10;
// let c;
// console.log(`before swap a value is ${a} `);
// console.log(`before swap b value is ${b} `);

c = a;
a = b;
b = c;
// console.log(`after swap a value is ${a} `);
// console.log(`after swap b value is ${b} `);


// var a = 100;
// var b = 200;
// console.log(`before swap a value is ${a} `);
// console.log(`before swap b value is ${b} `);
a = a + b;
b = a - b;
a = a - b;
// console.log(`after swap a value is ${a} `);
// console.log(`after swap b value is ${b} `);


                    // second time
// var p =50;
// var q = 100;
// console.log(`before swap a value is ${p} `);
// console.log(`before swap b value is ${q} `);
// p = p + q;
// q= p - q;
// p = p - q;
// console.log(`before swap a value is ${p} `);
// console.log(`before swap b value is ${q} `);

                    // * same prog. in es6
"use strict"
var a;
var b ;
[a=120,b=420]
console.log(`beofre swap a value is ${a} `);
console.log(`before swap b value is ${b} `);
[a,b] = [b,a]
console.log(`after swap a value is ${a} `);
console.log(`after swap b value is ${b} `);


