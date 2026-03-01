//Exercise 1. What is a function?
/* A function is a reusable block of code that performs a specific task. It can take input parameters, execute a series of statements, and return a value. Functions help to organize code, improve readability, and promote code reusability. */

//EXERCISE 2: Kind of functions in TypeScript
/*There are several kinds of functions in TypeScript:*/
//1. Named functions
    //Function wihout parameters and return type
function greet(){
    console.log("Hello, World!");
};
greet();

//Function without parameters and return type
function return_greet() {
     return console.log("Hello, World!");
}
return_greet();

//Function with parameters
function greet_name(name: string, prog: string) {
    console.log(`Hello ${name}, welcome to ${prog}!`);
}
greet_name("Apraghatyus", "Typescript");
//what happend if I have a array with the name of the parameters?
let person1 = ["Tulio", "Frameworks"];
greet_name(person1[0], person1[1]);

//Function with return and parameters
function greet_name_return(name: string, prog: string){
    return `Hello ${name}, welcome to ${prog}!`;
}
console.log(greet_name_return("Apraghatyus", "Typescript"));

//2. Anonymous functions
/* Anonymous functions are functions that do not have a name and are often used as arguments to other functions
 or assigned to variables. They can be defined using the function keyword or as arrow functions.*/
let anonymous = function(name: string) {
    console.log(`Hello ${name}, welcome to Typescript!`);
};
anonymous("Apraghatyus");

//3. Arrow functions
/* Arrow functions are a more concise syntax for writing anonymous functions. They are defined using 
the => syntax and can have an implicit return if the function body is a single expression. */
const arrow = (name: string) => {
    console.log(`Hello ${name}, welcome to Typescript!`)
};
arrow("Travis Scott");

//Arrow function with implicit return
const add = (a: number, b: number): number => a + b;
console.log(add(2, 3));

const suma = (a: number, b: number) => {
    const c = a + b;
    return c;
}
//4. Function constructors
/* Function constructors are a way to create functions using the Function constructor. 
They are less commonly used and can be less efficient than other function types. */
let functionConstructor =new Function("name", "console.log(`Hello ${name}, welcome to Typescript!`);");

functionConstructor("Guarnizo");

//5. Async functions
/* Async functions are functions that return a Promise and can be used with the async/await syntax.
They are typically used for handling asynchronous operations, such as fetching data from an API. */

/*This concept is a bit more advanced, but it's important to know that async functions allow us to 
write asynchronous code in a more synchronous-looking way, making it easier to read and maintain.*/
async function fetchData(url: string): Promise<string> {
    const response = await fetch(url);
    const data = await response.text();
    return data;
}
fetchData("https://jsonplaceholder.typicode.com/posts/1")
    .then(data => console.log(data))
    .catch(error => console.error(error));

//6. Generator functions
/* Generator functions are a special type of function that can be paused and resumed,
 allowing them to generate a sequence of values over time. They are defined using the function* 
 syntax and use the yield keyword to produce values. */
function* generateNumbers() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = generateNumbers();
console.log(gen.next()); // { value: 1, done: false }

//7. Overloaded functions
/* Overloaded functions are functions that can have multiple signatures, allowing them to be called with different sets of parameters. 
In TypeScript, we can achieve function overloading by defining multiple function signatures and a single implementation. */
function combine(a: string, b: string): string;
function combine(a: number, b: number): number;
function combine(a: string, b: number): string;
function combine(a: any, b: any): any {
    return a + b;
}
console.log(combine("Hello, ", "world!")); // "Hello, world!"
console.log(combine(1, 2)); // 3
console.log(combine("The answer is ", 42)); // "The answer is 42"

//8. Callback functions
/* Callback functions are functions that are passed as arguments to other functions and are executed after a certain event or condition is met. 
They are commonly used for handling asynchronous operations, such as event handling or making API calls. */
function processUser(name: string, callback: (msg: string) => void) {
    const message = `User ${name} processed`;
    callback(message);
}

processUser("Apraghatyus", (msg) => {
    console.log(msg);
});

//9. Higher-order functions
/* Higher-order functions are functions that can take other functions as arguments or return functions as their result. 
They are a powerful tool for creating reusable and composable code. */
function multiplier(factor: number) {
    return function(number: number) {
        return number * factor;
    };
}

const double = multiplier(2);
console.log(double(5));

//10. local and global variables in functions
/* Local variables are variables that are declared within a function and are only accessible within that function. 
Global variables, on the other hand, are variables that are declared outside of any function and can be accessed from anywhere in the code. */
let globalVar = "I am a global variable";
function localGlobal() {
    let localVar = "I am a local variable";
    console.log(globalVar); // Accessing global variable
    console.log(localVar); // Accessing local variable
}
console.log(globalVar); // Accessing global variable
//console.log(localVar); Error: localVar is not defined
localGlobal();

//EXERCISE 3: FizzBuzz with functions
/* Make a function that counts from 1 to 100 and prints "Fizz" for multiples of 3, "Buzz" for multiples of 5, and "FizzBuzz" for multiples of both. */
let Sachipapa = (first: string, second: string) => {
    for (let i: number = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(`${i}: ${first}${second}`);}
        else if (i % 3 === 0) {
            console.log(`${i}: ${first}`);}
        else if (i % 5 === 0) {
            console.log(`${i}: ${second}`);}
    }
};
        
Sachipapa("Salchi", "papa");