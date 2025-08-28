
{
    let x = 10; // 'x' is declared with 'let' inside this block, so it is block-scoped.
}
// console.log(x); // This would throw a ReferenceError because 'x' is not accessible outside the block.

{
    var y = 7; // 'y' is declared with 'var', which does not have block scope. It is hoisted to the global or function scope.
}

let text = "Hello"; // 'text' is declared with 'let', so it is block-scoped to the current script or function.

console.log(y); // Output: 7, because 'y' is accessible globally (or in the function scope if inside a function).
console.log(text); // Output: Hello, because 'text' is accessible in the current scope.
