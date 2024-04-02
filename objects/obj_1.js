// singleton objects
// const user = new Object()

//object literls OR non singleton objects
// const user ={}

                    // * accessing obj in obj - nesting obj
const jsuser = {
    name:'mubin',
    age:21,
    city:"veraval",
    email:"mubinmalek123@yahoo.com",
    userfullname: {
        fullname: "mubin malek",
            flname: {
                first: "mubin",
                last:"malek"
        }
    }
}
// console.log(jsuser.userfullname);
// console.log(jsuser.userfullname?.flname);
// console.log(jsuser.userfullname.flname.last);

                    // *ternary operator with/in obj
// const obj1={1:"a", 2:"b",3:"c" };
// const obj2={4:"d", 5:"b",6:"c" };
// const obj3={7:"a", 8:"b",9:"c"};

// const obj4 = {...obj1, ...obj2, ...obj3}
// console.log(obj4);

                    // *accessing every keys and values of an obj

// console.log(Object.keys(jsuser));
// console.log(Object.values(jsuser));

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