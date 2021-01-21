// https://youtu.be/9M4XKi25I2M
// 1:04:53 - Primitives and Objects

/*

There are 2 main types of variables in JS:
1) primitives
2) objects


In JS variable types are assigned and changed dynamically.

TypeScript is superset of JS.

*/

// Primitives
{
    let x = 5;    // number
    let b = "10"; // string

    x = x + b;
    console.log(x) //510 as they are concatenated as strings

}

let tacos_1;        // undefined
let tacos_2 = null; // null


// Objects
{
    let person = {
        name: "John",              // these are properties (values in object)
        age: 93,
        favFood: "Pizza",
        fun: function() {         // this is method (functions in object)
            console.log("Yay!")
        }
    }
}

person.fun(); // call method

// Arrays ale also objects 
let grades = [30, 30, 12, 23];