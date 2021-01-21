
// https://youtu.be/9M4XKi25I2M
// 1:29:52 - Increment, Decrement, and Assignment Operators

{
    // ++ and -- are postfix operators
  
    let slicesOfPizza = 10;
    slicesOfPizza = 11;
  
    // This one
    slicesOfPizza = slicesOfPizza + 1;
    // is the same as
    slicesOfPizza++;
  
    console.log(slicesOfPizza); // 13
  
    // Subtracts 1
    slicesOfPizza--;
    console.log(slicesOfPizza); // 12
  
    /* ++ and -- postfix operators: action (increment/decrement) 
                   happens after assignment.
       ++ and -- prefix operators: action
                   happens before assignment.
    */
  
     let newPizza1 = --slicesOfPizza;
     console.log("New pizza 1:", newPizza1);       // 11
  
     let newPizza2 = slicesOfPizza--;
     console.log("New pizza 2:", newPizza2);       // 11
     console.log("slicesOfPizza:", slicesOfPizza); // 10
     
     // assignment operators -=, +=, *=, etc.
     
     slicesOfPizza = slicesOfPizza + 20
     console.log("slicesOfPizza = slicesOfPizza + 20:", slicesOfPizza); // 30
     // Is the same as
     slicesOfPizza += 20
     console.log("slicesOfPizza += 20:", slicesOfPizza); // 50
  
     // the same happens for other operators +, -, *, /, % → +=, -=, *=, *=, %=
  
     slicesOfPizza /= 10
     console.log("slicesOfPizza /= 20:", slicesOfPizza); // 5
  }
  