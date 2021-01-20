// https://youtu.be/9M4XKi25I2M
// 59:21 - Block Scoping

(function () {
    // IIFE - immediately invoked function expression
  })();
  
  // 'let' creates object in global scope but does not attach to 'window' object.
  
  {
    // block
  }
  
// -------------------------------------------------

  {
    // these accessible only in block:
    let y = 10;
    const x = 20;
  
    console.log(x, y);
  
    // This is accessible outside the block
    var z = 100;
  }
  
// -------------------------------------------------

  {
    let y = 10;
    const x = 20;
    {
      let y = 6;
      console.log(y); // 6
    }
  
    console.log(y); // 10
  
  }
  