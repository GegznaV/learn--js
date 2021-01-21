// https://youtu.be/9M4XKi25I2M
// 1:25:08 - Arithmetic Operators, Precedence, Associativity

{
    var slicesOfPizza = 10;
    
    /* Operators:

    +
    -
    *
    /
    % - modulus operator (remainder of division)

    */

    console.log(slicesOfPizza % 4.25)

    var precedence1 = 5 +  3 * 12  -  20 / 10
    var precedence2 = 5 + (3 * 12) - (20 / 10)

    console.log(precedence1, precedence2)
}