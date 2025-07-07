// Length of a String

let firstName = "Vaishali";
console.log(firstName.length);
// Access String Element

console.log(firstName.charAt(2)); // i
console.log(firstName[2]); // i
console.log(firstName.charCodeAt(2)); // 115 (Ascii Code)

// Check Presence of Character

console.log(firstName.includes("r")); // false (& if present it return true)
console.log(firstName.indexOf("i")); // 2 (& if not present it return -1)
console.log(firstName.lastIndexOf("i")); // 7 

// Compare Two Strings 

let anotherName = "Vishal";
console.log(firstName.localeCompare(anotherName)); // -1 (& if strings are equal it return 0)

// Replace Substring
// Note: replace() replaces only the first occurrence, while replaceAll() replaces all occurrences.
// Example: replace() vs replaceAll()
// replace() is case-sensitive, while replaceAll() is not.
// Example: replace() vs replaceAll()
// replace() can take a string or a regular expression, while replaceAll() only takes a string.

const str = "Vishal is Best Frontend Developer. Vishal is Best Developer. ";
console.log(str.replace("Vishal", "Sujit")); // "Sujit is Best Frontend Developer. Vishal is Best Developer. "
console.log(str.replaceAll("Vishal", "Sujit")); // "Sujit is Best Frontend Developer. Sujit is Best Developer. "

// Substring of a String methods
// difference between substring() and slice():
// substring() does not support negative indices, while slice() does.


console.log(str.substring(6, 30)); 
console.log(str.slice(-10, -1));

// Split and Join
// Split a string into an array of substrings
//note: split() takes a separator as an argument, which can be a string or a regular expression.
// Join an array of substrings into a string
// note: join() takes a separator as an argument, which is used to join the array elements into a string.


console.log(str.split(""));
const subString = str.split(" ");
console.log(subString.join(" "));

// String Start and End

console.log(str.startsWith("Vishal")); // true
console.log(str.endsWith("Developer")); // true

// Trim and Case Conversion

const trimStr = str.trim();
const trimStrStart = str.trimStart();
const trimStrEnd = str.trimEnd();
console.log(trimStr, trimStr.length);

// Case Conversion
// toLowerCase() converts all characters to lowercase
// toUpperCase() converts all characters to uppercase
// tolowercase vs tolocale vs toUpperCase vs toLocaleUpperCase
// toLowerCase() and toUpperCase() are case-sensitive, while toLocaleLowerCase() and toLocaleUpperCase() are not.
// toLowerCase() and toUpperCase() are locale-sensitive, while toLocaleLowerCase() and toLocaleUpperCase() are not.
// toLowerCase() and toUpperCase() are faster than toLocaleLowerCase() and toLocaleUpperCase().


console.log(str.toLowerCase() === str.toLocaleLowerCase());
console.log(str.toUpperCase() === str.toLocaleUpperCase());

console.log(str.toLowerCase());
console.log(str.toUpperCase());

// Convert Number and Object to String

const num = 123;
console.log(num, num.toString());

const obj = {
    name: "Vishal",
    course: "DSA with Vishal"
};
console.log(obj, JSON.stringify(obj));

// Concatenate Strings

const lastName = "Rajput";
console.log(firstName + lastName);
console.log(`${firstName} ${lastName} is a Best Developer`);
console.log(firstName.concat(lastName, " is a", " Best"));

// Template Literals
// Template literals allow for multi-line strings and string interpolation.

console.log(`Hello, my name is ${firstName} ${lastName}.`);

// Template literals can also be used for multi-line strings.
const multiLineString = `This is a string
that spans multiple lines.`;
console.log(multiLineString);

// String Iteration
for (const char of firstName) {
    console.log(char);
}
// String Iteration with forEach
Array.from(firstName).forEach((char) => {
    console.log(char);
});
// String Iteration with for...of
for (const char of firstName) {
    console.log(char);
}
// String Iteration with for...in
for (const index in firstName) {
    console.log(firstName[index]);
}

// String Iteration with forEach
Array.from(firstName).forEach((char) => {
    console.log(char);
});






















