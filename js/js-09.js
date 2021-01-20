// https://youtu.be/9M4XKi25I2M 
// 53:36 - Global vs Local Variables

/*
We cannot trust all browsers on how the code works.


Keyword "var" defines object in the scope where the function is defined.

Global variables are attached to the 'window' object.
If we define variables globally, we can replace pre-defined variables in 'window' object
thus this is DANGEROUS.

It is easy to use browser development tools like REPL.

We can define variables using keywords 'var', 'let', 'const' or without keyword:
- if no keyword is used, variable has global scope;
- 'var' - function level variables;
- 'let' - Just in newer JS versions. Block level variables (e.g., just in 'if' block);
- 'const' - the same scope as 'let', but cannot change the value of an object.

'var' has broader scope than `let` or `const`.

*/
