//* object
const mySym = Symbol("key 1");
const person = {
    [mySym]: "my key 1",
  name: "mubin",
  "full name": "mubin malek",
  age: 21,
  city: "veraval",
  email: "mubinmalik21@gmail.com",
  moviedays:["saturday", "sunday"]
};
person.state="gujarat"
console.log(person.state);
// console.log(person.name);
// console.log(person["full name"]); //not frq used but remember this technique
// console.log(person[mySym]); //use of symbbol data type imp for intr
// console.log(person.moviedays);

// person.email = "mubinmalik47@gmail.com"; //re-assighn value in obj
// console.log(person.email);

// Object.freeze(person); //freeze the object 
// person.email = "mubinmalik123@gmail.com"; //dont give error but didnt change it
// console.log(person.email);


// adding new properties so firstly unfreeze the object

// person.greetings = function(){
//     console.log("kese ho");
//     // return none;   return karvu padse jyare func no use karo baki undefine aavse
// }
// console.log(person.greetings());
// // console.log(console.log("hiii"));

// person.greetings2 = function(){
//     console.log(`kese ho, ${this.name}`);
// }
// console.log(person.greetings2());



// person.show = function(){
//     console.log("your age is:")
//     return ;
// }
// console.log(person.show());
// person.show2 = function(){
//     console.log(`your age is: ${this.age}`)
//     return ;
// }
// console.log(person.show2());


person.place = function(){
    console.log(`your city is :${this.city}`);
}
console.log(person.place());

