// Data Structures
// Array
/* Array is the TypeScript equivalent of a Python List. It is a collection of items that are ordered and changeable. It allows duplicate members. Arrays are defined by having values between square brackets []. */
let myArray: string[] = [
  "D4vd",
  "Post Malone",
  "The Weeknd",
  "Travis Scott",
  "Kanye West",
];
myArray.push("Drake");                  // create / append
myArray.splice(0, 0, "J. Cole");        // insert at index 0
myArray[2] = "Kendrick Lamar";          // update
myArray.splice(myArray.indexOf("Travis Scott"), 1); // delete
myArray.sort();                         // sort the array
/* Arrays can be accessed by index, and they can also be sliced to create new arrays. Arrays are mutable, meaning that their contents can be changed after creation. */
console.log("Array:", myArray);

// Tuple
/* TypeScript does not have a built-in tuple type like Python, but we can achieve the same behavior using a readonly array. It is an ordered and unchangeable collection. It allows duplicate members. */
const myTuple: readonly string[] = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Monday",
] as const;
/* Tuples can be accessed by index, and they can also be sliced to create new tuples. Tuples are immutable, meaning their contents cannot be changed after creation. */

// Set
/* Set is a collection of items that are unordered and unindexed. It does not allow duplicate members. Sets are defined using the Set constructor. */
const mySet: Set<string> = new Set(["Apple", "Banana", "Cherry", "Apple"]);
/* Sets are unordered, meaning items do not have a defined order. Sets are mutable, meaning their contents can be changed after creation. However, since sets do not allow duplicate members, any duplicate items will be automatically removed. */
mySet.add("Orange");    // create / add
mySet.delete("Banana"); // delete
/* The best way to update data in a Set is to delete the old value and add the new one. Since sets do not allow duplicates, we can simply add the new data without worrying about duplicates. */
console.log("Set:", mySet);

// Map
/* Map is similar to a Dictionary but more powerful. Unlike a plain object, a Map allows ANY type as a key — strings, numbers, objects, even functions. It also preserves insertion order and performs better with frequent additions and deletions. Python has no direct equivalent. */
const myMap: Map<string, string | number | boolean> = new Map();
myMap.set("song", "Goosebumps");  // create
myMap.set("artist", "Travis Scott");
myMap.set("active", true)
myMap.set("year", 2016);
myMap.set("artist", "Travis Scott & HVME"); // update (overwrites existing key)
//myMap.delete("year");                        // delete
console.log("Map:", myMap);
//console.log("Map artist:", myMap.get("artist")); // access by key

// WeakMap
/* WeakMap is like a Map, but keys MUST be objects and are held "weakly". This means if the object used as a key has no other references in your program, JavaScript's garbage collector will automatically remove it from the WeakMap to free up memory. This makes WeakMap ideal for storing metadata about objects without preventing them from being garbage collected. Python has no native equivalent — it ties directly into the JS memory model. */
type Artist = { name: string };

const weekndObj: Artist   = { name: "The Weeknd" };
const drakeObj: Artist    = { name: "Drake" };

const myWeakMap: WeakMap<Artist, string> = new WeakMap();
myWeakMap.set(weekndObj, "After Hours");  // create  — key is an object
myWeakMap.set(drakeObj, "Certified Lover Boy");
myWeakMap.set(weekndObj, "Hurry Up Tomorrow"); // update
myWeakMap.delete(drakeObj);                    // delete
console.log("WeakMap has weekndObj:", myWeakMap.has(weekndObj)); // true
console.log("WeakMap has drakeObj:", myWeakMap.has(drakeObj));   // false

// WeakSet
/* WeakSet is like a Set, but it can only store objects and holds them weakly. Just like WeakMap, if an object stored in a WeakSet has no other references, it will be garbage collected automatically. Useful for tracking which objects have been "seen" or "processed" without preventing memory cleanup. Python has no native equivalent. */
const kanyeObj: Artist    = { name: "Kanye West" };
const colej: Artist       = { name: "J. Cole" };
const kendrickObj: Artist = { name: "Kendrick Lamar" };

const myWeakSet: WeakSet<Artist> = new WeakSet();
myWeakSet.add(kanyeObj);    // create
myWeakSet.add(colej);
myWeakSet.add(kendrickObj);
myWeakSet.delete(colej);    // delete
console.log("WeakSet has kanyeObj:", myWeakSet.has(kanyeObj));    // true
console.log("WeakSet has coleObj:", myWeakSet.has(colej));        // false

// Typed Array
/* Typed Arrays (e.g. Int8Array, Uint16Array, Float32Array) are fixed-type, fixed-size arrays that work directly with raw binary memory. Unlike regular arrays, every element must be the same numeric type, which makes them much faster for performance-critical work like audio, video, graphics, and networking. Python has the 'array' module and NumPy, but nothing like this is built into the language natively at the same level. */
const bpm: Float32Array = new Float32Array(5); // create — 5 slots, all 0.0
bpm[0] = 140.5; // create / set
bpm[1] = 128.0;
bpm[2] = 95.3;
bpm[3] = 110.7;
bpm[4] = 150.0;
bpm[2] = 96.0;  // update
// Typed Arrays have no built-in delete; set to 0 to "clear" a slot
bpm[3] = 0;     // delete (zeroed out)
console.log("Typed Array (BPM):", bpm);
console.log("Sorted BPM:", bpm.slice().sort());

// Enum
/* Enum is a first-class language feature in TypeScript that lets you define a set of named constants. There are two flavors: numeric (default) and string enums. Python has an 'enum' module, but in TypeScript enums are built directly into the type system and compile down to plain JS objects, making them feel native to the language. */
enum Genre {
  HipHop = "Hip-Hop",
  RnB    = "R&B",
  Pop    = "Pop",
  Trap   = "Trap",
  Indie  = "Indie",
}

type Song = {
  title: string;
  artist: string;
  genre: Genre;
};

const mySong: Song = {
  title: "Blinding Lights",
  artist: "The Weeknd",
  genre: Genre.RnB, // create using enum value
};
mySong.genre = Genre.Pop; // update to a different enum value
console.log("Enum Song:", mySong);
console.log("All Genres:", Object.values(Genre));