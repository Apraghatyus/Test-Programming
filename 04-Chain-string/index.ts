//  STRING OPERATIONS IN TYPESCRIPT
const word = "Hello, World!";

/*1. Access specific characters */
const firstChar = word[0];           // "H"
const lastChar  = word[word.length - 1]; // "!"
const byAt      = word.at(-1);       // "!" (supports negative index)
console.log("Access chars:", firstChar, lastChar, byAt);

/*2. Substring */
const sub1 = word.slice(7, 12);      // "World"
const sub2 = word.substring(7, 12);  // "World"
console.log("Substring:", sub1, sub2);

/*3. Length */
const len = word.length;             // 13
console.log("Length:", len);

/*4. Concatenation */
const greeting = "Hello" + ", " + "TypeScript!";
const greetingConcat = "Hello".concat(", ", "TypeScript!"); // using concat()
console.log("Concatenation:", greeting, greetingConcat);

/*5. Repeat */
const repeated = "ha".repeat(3);     // "hahaha"
console.log("Repeat:", repeated);

/*6. Iteration / Traversal */
console.log("Iteration:");
for (const char of "abc") {
  process.stdout.write(char + " "); // a b c
}
console.log();
// Also with forEach via spread:
[..."abc"].forEach((c, i) => console.log(`  index ${i}: ${c}`));

/*7. Convert to uppercase / lowercase */
const upper = word.toUpperCase();    // "HELLO, WORLD!"
const lower = word.toLowerCase();    // "hello, world!"
console.log("Upper:", upper);
console.log("Lower:", lower);

/*8. Replace */
const replaced    = word.replace("World", "TypeScript");   // replaces first match
const replacedAll = "aabbaa".replaceAll("a", "x");         // "xxbbxx"
const replacedRgx = word.replace(/[aeiou]/gi, "*");        // replaces all vowels
console.log("Replace:", replaced);
console.log("ReplaceAll:", replacedAll);
console.log("Replace (regex):", replacedRgx);

/*9. Split */
const sentence = "one two three";
const words    = sentence.split(" ");  // ["one", "two", "three"]
const chars    = "abc".split("");      // ["a", "b", "c"]
console.log("Split:", words, chars);

/*10. Join */
const joined = ["one", "two", "three"].join(" - "); // "one - two - three"
console.log("Join:", joined);

/*11. Interpolation */
const namea = "TypeScript";
const version = 5;
const interpolated = `Hello from ${namea} v${version}!`;
console.log("Interpolation:", interpolated);

/*12. Validation / Check */
const str = "  hello world  ";
console.log("Includes:",    str.includes("hello"));       // true
console.log("StartsWith:",  str.trim().startsWith("h")); // true
console.log("EndsWith:",    str.trim().endsWith("d"));   // true
console.log("IndexOf:",     str.indexOf("world"));       // 7
console.log("Trim:",        str.trim());                 // "hello world"
console.log("TrimStart:",   str.trimStart());
console.log("TrimEnd:",     str.trimEnd());
console.log("isEmpty:",     "".length === 0);            // true
console.log("Test (regex):", /^\d+$/.test("12345"));     // true – only digits

/*Bonus: padStart / padEnd, charCodeAt, normalize */
console.log("PadStart:", "7".padStart(3, "0"));   // "007"
console.log("PadEnd:",   "7".padEnd(3, "0"));     // "700"
console.log("CharCode:", "A".charCodeAt(0));      // 65
console.log("FromCode:", String.fromCharCode(65)); // "A"