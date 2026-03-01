// to create a comment in typescript we can use two slashes (//) for single line comments
/* or we can use slash and asterisk  for multi-line comments */
//The all doc to Ts can be found in the official website of typescript https://www.typescriptlang.org/docs/handbook/intro.html

// We gonna start find the way to print "Hello, Typescript!" in the console, we can do that by using console.log() function

console.log("Hello, Typescript!");

//we can use the var, let or const keywords to declare a variable in typescript, but the most common way is to use let and const, var is not recommended to use because it has some issues with scope and hoisting.
let nombre: string = "Apraghatyus"; // we can specify the type of the variable by using a colon (:) followed by the type, in this case we are specifying that the variable name is of type string
const pi: number = 3.14; // we can also use const to declare a variable that cannot be reassigned, in this case we are declaring a constant variable pi of type number
var age: number = 25; // we can also use var to declare a variable, but it is not recommended to use because it has some issues with scope and hoisting


//Now We leanr how the different type of variables that we can use in typescript, we have 5 main types of variables in typescript, they are:
let enteros: number = 10; // whole numbers
let decimales: number = 3.14; // decimal numbers (not different from enteros in typescript)
let texto: string = "Apraghatyus"; // text
let booleano: boolean = true; // true or false
let nulo: null = null; // null value
let any: any = "This can be any type"; // any type, can be assigned any value
let voidType: void = undefined; // void type, represents the absence of a value, typically used for functions that do not return anything

// we can found more varibles in typescript some of them are:
let indefinido: undefined = undefined; // undefined value
let bigint: bigint = 9007199254740991n; // what is bigint? it's a new type in typescript that can represent integers with arbitrary precision, it is denoted by appending 'n' to the end of the number
let simbolo: symbol = Symbol("simbolo"); // what is symbol? it's a new type in typescript that can represent unique identifiers, it is created by calling the Symbol() function with an optional description