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
/*
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
*/

  //STEP 2:
/*
let x = 1;
let y = 12;
let z = "";

while (x <= y) {
    if(y % x !== 0){
        x++;
    }
    else{
    z = z + x + " ";
    x++;
    }
}
console.log(z);
document.write(`the factors of Y (${y}) are: ${z}`);
*/

let x = 3;
let y = 40;
let z = "";
let count = 1;

while (count <= y) {
    if (count==0){
        count++;
    }
    else if(count % x !== 0){
        count++;
    }
    else{
    z = z + count + " ";
    count++;
    }
}
console.log(z);
document.write(`Every value divisible by X (${x}) between the positive integers 0 and Y (${y}) are: ${z}`);

/*
//STEP 2 COMPLETE ABOVE

//STEP 3:
        var x="D";
        var y=2;

        switch(x) {
        
        case "A":
            y = x;
            console.log("The value of y is now "+ y);
            break;
        case "B":
            y = y*3;
            console.log("The value of y is now "+ y);
            break;
        case "C":
            y = 0;
            console.log("The value of y is now "+ y);
            break;
        case "D":
            y = "null";
            console.log("The value of y is now "+ y);
            break;
        }
//STEP 3 COMPLETE ABOVE
*/

// STRETCH REQUIREMENT // 
// Stretch Requirements:
// 1. Given four variables, x, y, even, and odd, where x and y are positive numbers 
// and even and odd start at 0; count how many numbers are even or odd between x and y.*

let x = 3;
let y = 40;
let odd = 0;
let even = 0;

function evenOddCount (x, y) {

    if (y > x) {
        x = x+1;
        while (x < y) { 
            if(x % 2 > 0){
                odd++;
                x++;
            }

            else{
                even++;
                x++;
            }
        }
    }
    else if (x > y) {

        let odd = 0;
        let even = 0;
        y=y+1;
        while (y < x) {
            if(x % 2 > 0){
                odd++;
                y++;
            }

            else{
                even++;
                y++;
            }
        }
    }

}
evenOddCount(5, 10);

document.write(`Even count = ${even}, while the Odd count = ${odd}`);