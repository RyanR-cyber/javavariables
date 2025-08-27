{
let x = 10;
}
// x is in a block scope, so it is not accessible here

{
    var x = 7;
}
// x is in a global scope, so it is accessible here because var does not have block scope

let text = "Hello";
// this is a string variable

console.log(text); // Output: Hello
// this is string variable logged to the console