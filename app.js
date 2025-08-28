
{
    let x = 10; // 'x' is declared with 'let' inside this block, so it is block-scoped.
}
// console.log(x); // This would throw a ReferenceError because 'x' is not accessible outside the block.



let text = "Hello"; // 'text' is declared with 'let', so it is block-scoped to the current script or function.


console.log(text); // Output: Hello, because 'text' is accessible in the current scope.
