/*
Requirements:
1. Given two variables, x and y, swap their values so that x is less than y.
2. Given three variables, x, y, and z, where x and y are both positive numbers. Set z to be a
string of each value from 0 to y that is divisible by x.

3. Given two variables, x and y, perform the following based on the value of x:
a. x=‘A’:Setytothevalueofx.
b. x=‘B’:Setyto3timesthevalueofy. 
c. x=‘C’:Setytobe0.
d. x=‘D’:Setytonull

Stretch Requirements:
1. Given four variables, x, y, even, and odd, where x and y are positive numbers and even and odd start at 0; count how many numbers are even or odd between x and y.*/

// STEP 1:

function swapNumbers(x,y) {

    if(x == y) {
        console.log("X is equal to Y");
    }

    else if (x < y) {
        console.log("X is already less than Y");    
    }

    else if (x > y) {
        
        let largerNumber = x;
        console.log(x);
        console.log(y);
        console.log(largerNumber);
        console.log("--");
        x = y;
        console.log(x);
        console.log(y);
        console.log(largerNumber);
        console.log("--");
        y = largerNumber;
        console.log(x);
        console.log(y);
        console.log(largerNumber);
        console.log("--");
        console.log("X is now less than Y");
        }       
    }
     swapNumbers(15,12);
  // STEP 1 COMPLETE (ABOVE)  

  //STEP 2:

