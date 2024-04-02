//  *use of var for declaire the variable 
// var a = 10
// function f() {
//     var b = 20
//     c =30;
//     console.log(a, b)
// }
// f();
// console.log(a);
// console.log(c);


//  *behaviour of var variables when declared inside a function and call it outside of it.

            // function f(){
            //     var a = 12;
            //     console.log(a);
            // }
            // f();
            // console.log(a);

//  *re-declare in var (no error in var)

            // var a = 12;
            // var a = 2;
            // var a = 7;

            // console.log(a);

// *hoisting concept with the var keyword

            // x = 5;
            // var x;
            // console.log(x);

            // console.log(a);
            // var a = 10;
                                                    // let keyword
// *declaration using let keyword

            // let x = 5;
            // function f(){
            //     let y = 10;
            //     console.log(x)
            //     console.log(y)
            // }
            // f();

// *block scope of the variable using let

    let a = 5;
    function f(){
       if (true){
        var b = 10;
        console.log(b)
       } 
    console.log(b)
}
f()
console.log(a)

// *behaviour of let variables when they are re-declared in the different scopes.

// let a = 5;
// function f(){
//       var a = 10;
//         console.log(a);
//     }

// f();
// console.log(a)


// * let re-declaration 
// let x = 4;
// if (true){
//     let x = 5;
//     console.log(x)
// }
// console.log(x)

// * hoisting concept in let

// console.log(x)
// let x = 3;

                                        // const 
// const a ={
//     prop1: 90,
//     prop2:80
// }
// a.prop1 = 95;
// console.log(a);
// a.prop2= 786;
// console.log(a);
// a = {
//     aline: 11,
//     prop2: 60
// }
// const a = {
//     prop1: 10,
//     prop2: 9
// }
// //  *It is allowed
// a.prop1 = 30
// // *It is not allowed
// a = {
//     b: 10,
//     prop2: 19
// }
// console.log(a);