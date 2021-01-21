// https://youtu.be/9M4XKi25I2M
// 1:20:02 - Number Data Type

// JS has only 'number' type
{
    console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

    let x = 9007199254740995;
    console.log(x); /* due to limited allocated space in memory, too big values 
                       cannot be safely represented: number my be different 
                       than expected */
    console.log(Number.isSafeInteger(x));
}

// There are 3 special values: negative and positive Infinity and NaN (not a number)

{
    let babies = 9007199254740991;
    console.log(Math.pow(babies, 200)); // Infinity
    console.log(1/0);                   // Infinity
    console.log(1/-0);                  // -Infinity
    console.log(console.log() + 2);     // NaN

}