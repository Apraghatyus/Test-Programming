// EXERCESE 1: Operators
//arithmetic operators: +, -, *, /, %
/*Create a exaple for each arithmetic operator*/
let a :number = 5;
let b :number = 3;
let sum :number = a + b; // 8
let rest :number = a - b; // 2
let prod :number = a * b; // 15
let div: number = a / b; // 1.66
let mod: number = a % b; // 2
let pow: number = a ** b; // 125
let inc: number = ++a; // pre-increment, 6
let dec: number = --b; // pre-decrement, 2

//logical operators: &&, ||, !
/*create a example for each logical operator*/
let v : boolean = true;
let f : boolean = false;
let and: boolean = v && f; //for operator AND, the result is true if both operands are true, otherwise it is false
let or: boolean = v || f; //for operator OR, the result is true if at least one of the operands is true, otherwise it is false
let not: boolean = !v; //for operator NOT, the result is the opposite of the operand, if the operand is true, the result is false, and if the operand is false, the result is true

//comparison operators: ==, !=, >, <, >=, <=, ===, !==
/* create a example for each comparison operator*/
let x : number = 10;
let y : number = 20;
let equal: boolean = x == y; 
let notEqual: boolean = x != y; 
let greater: boolean = x > y; 
let less: boolean = x < y; 
let greaterEqual: boolean = x >= y; 
let lessEqual: boolean = x <= y;
let equalStrict: boolean = x === y; 
let notEqualStrict: boolean = x !== y;

//assignment operators: =, +=, -=, *=, /=, %=
/* create a example for each assignment operator */
let c : number = 5;
c += 3; // equivalent to c = c + 3, c is now 8
c -= 2; // equivalent to c = c - 2, c is now 6
c *= 4; // equivalent to c = c * 4, c is now 24
c /= 2; // equivalent to c = c / 2, c is now 12
c %= 3; // equivalent to c = c % 3, c is now 0

//membership operators: in, instanceof
/* create a example for each membership operator */
let arr : number[] = [1, 2, 3, 4, 5];
let isInArray: boolean = arr.includes(3); // true, because 3 is an element of the array
let isNotInArray: boolean = !arr.includes(6); // true, because 6 is not an element of the array

//bitwise operators: &, |, ^, ~, <<, >>, >>>
/* create a example for each bitwise operator */
let num1 : number = 7; // in binary: 0101
let num2 : number = 3; // in binary: 0011
let andBitwise: number = num1 & num2; // bitwise AND, result is 1 (in binary: 0001)
let orBitwise: number = num1 | num2; // bitwise OR, result is 7 (in binary: 0111)
let xorBitwise: number = num1 ^ num2; // bitwise XOR, result is 6 (in binary: 0110)
let notBitwise: number = ~num1; // bitwise NOT, result is -6 (in binary: 1010, which is the two's complement representation of -6)
let leftShift: number = num1 << 1; // left shift, result is 10 (in binary: 1010)
let rightShift: number = num1 >> 1; // right shift, result is 2 (in binary: 0010)

//identity operators: ===, !==, in, instanceof
/* create a example for each identity operator */
let obj1 = { name: "Alice" };
let obj2 = { name: "Alice" };
let obj3 = obj1;
let isSameReference: boolean = obj1 === obj2; // false, because obj1 and obj2 reference different objects in memory
let isSameValue: boolean = obj1.name === obj2.name; // true, because the name property of both objects has the same value
let isSameReference2: boolean = obj1 === obj3; // true, because obj1 and obj3 reference the same object in memory 
let hasNameProp: boolean = "name" in obj1; // true, because obj1 has a property named "name"
let isArray: boolean = arr instanceof Array; // true, because arr is an instance of the Array class

// Nullish coalescing + optional chaining
let maybeName: string | null = null; // if maybeName is null or undefined, safeName will be assigned "default", otherwise it will be assigned the value of maybeName
let safeName = maybeName ?? "default"; // optional chaining allows you to access properties of an object without having to check if the object is null or undefined first. If the object is null or undefined, the expression will short-circuit and return undefined instead of throwing an error.

// typeof
let num: number = 42;
let typeOfnum: string = typeof num; // "number", because num is a number


// EXERCESE 2: Control structures
//if statement
/* create a example of an if statement */
let age: number = 18;
if (age >= 18 ) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

//switch statement
/* create a example of a switch statement */
let day: number = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day number");
}

//for loop
/* create a example of a for loop */
for (let i: number = 0; i < 5; i++) {
    console.log(i); // will print numbers from 0 to 4
}

//while loop
/* create a example of a while loop */
let count: number = 0;
while (count < 5) {
    console.log(count);
    count++; // will print numbers from 0 to 4
}

//do-while loop
/* create a example of a do-while loop */
let numCount: number = 0;
do {
    console.log(numCount);
    numCount++; 
} while (numCount < 5);

// EXERCESE 3: test your knowledge
/* create a function that print numbers between 10 and 55 (incluide), that are even, and that are neither 16 or multiples of 3. */
function printNumbers() {
    let numCount: number = 10;
    while (numCount <= 55) {
        if (numCount % 2 === 0 && numCount !== 16 && numCount % 3 !== 0) {
            console.log(numCount);
        }
        numCount++;
    }
}

