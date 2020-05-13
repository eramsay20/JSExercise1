/*
Requirements:
1. Given two variables, x and y, swap their values so that x is less than y.
2. Given three variables, x, y, and z, where x and y are both positive numbers. Set z to be a
string of each value from 0 to y that is divisible by x.

3. Given two variables, x and y, perform the following based on the value of x:
a. x=‘A’:Setytothevalueofx.
b. x=‘B’:Setyto3timesthevalueofy. c. x=‘C’:Setytobe0.
d. x=‘D’:Setytonull

Stretch Requirements:
1. Given four variables, x, y, even, and odd, where x and y are positive numbers and even and odd start at 0; count how many numbers are even or odd between x and y.*/

// STEP 1:
let x = 10;
let y = 8;

if(x > y) {
    let largerNumber = x;
    x = y;
    y = largerNumber;
    console.log("X is now less than Y");
}
    else if( x = y) {
        console.log("X is equal to Y");
    }
    else {
        console.log("X is less than Y");
}
  // STEP 1 COMPLETE (ABOVE)  
  
  //STEP 2: