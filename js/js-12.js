// https://youtu.be/9M4XKi25I2M
// 1:15:36 - Difference Between Primitives and Objects

/*
Primitives do not have methods.
*/

{
    let v_name = "This";
    v_name_mod = v_name.toUpperCase(); // new value should be reassigned to a new object
    console.log(v_name_mod);
  }
  
  {
    let v_name = "This";
    v_name_mod = new String("Clare");
    console.log(v_name_mod);
  }
  
  /* 
  When we access properties of primitives, they get wrapped (boxed) in object.
  After process is done, they are converted back into primitives.
  */
  {
    let v_name = "This";
    v_name.replace("i", "u"); // primitive gets wrapped in object
  }
  
  /* Number(), String() gives object versions of primitive types. */
  {
    let v_name = "This";
    let age = new Number();
    v_name_mod = new String("Clare");
    console.log(v_name_mod);
  }
  
  // When should you use primitive and when - an object?
  // Ans.: Usually we need primitives and when needed, conversion to obj. takes pace behind the scenes.