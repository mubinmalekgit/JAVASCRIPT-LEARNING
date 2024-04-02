
    // *THIS KEYWORD
const thisuser = {
prop1: "mubin",
func: function(){
return this.prop1;
}
}
// console.log(thisuser.func());
                      
                    // * this inside obj method
 // const obj ={
 //     name: "mubin",
 //     lname:"malek",
 //     functionname: function(){
//         return this.name;
//     }
// }
// console.log(obj.functionname());
                    
                    // *this inside the function O/P will undefine
function xyz(){
let username="mubin"
console.log(this.username);
return this;
}
console.log(xyz());