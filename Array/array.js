// How do you create an empty array in JavaScript?
// You can create an empty array in JavaScript using the array literal syntax `[]` or the `Array` constructor.
// The array literal syntax is more commonly used and is preferred for its simplicity and readability.
// The time complexity for creating an empty array is O(1) since it does not involve
// any operations on elements.
// The space complexity is also O(1) since you are not allocating any additional memory
// for elements in the array.

const arr = [1, 2, 3, 4, "Hello", {name: "Vishal"}, [1,2,3], 4];
// const arr2 = new Array();
console.log(arr);

// How do you access the first and last elements of an array?
// You can access the first element of an array using the index 0, and the last element using the index length - 1.
// The time complexity for accessing elements by index is O(1) since arrays in JavaScript
// are implemented as contiguous memory locations.
// The space complexity is O(1) since you are not using any additional data structures for
// accessing the elements.

const firstElement = arr[0]; // O(1)
const arrLength = arr.length;
const lastElement = arr[arrLength - 1];
console.log(firstElement, arrLength, lastElement);

// How do you remove the last element from an array?
// The pop() method removes the last element from an array and returns that element.
// This method changes the length of the array.

const lastElement1 = arr.pop(); // O(1)
console.log(arr, lastElement1);

// How do you add an element to the end of an array?
// The push() method adds one or more elements to the end of an array and returns the new length of the array.

arr.push(5); // O(1)
console.log(arr);

// How do you add an element to the start of an array?
// The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.

arr.unshift(0); // O(N)
console.log(arr);

// How do you remove the first element from an array?
// The shift() method removes the first element from an array and returns that element.

arr.shift(); // O(N)
console.log(arr);

// How do you loop through an array in JavaScript?
// There are several ways to loop through an array in JavaScript:
// 1. Using a traditional for loop
// 2. Using the forEach() method
// 3. Using a for...of loop

for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

arr.forEach((x, i) => {
    console.log(x);
});

for (let x of arr){
    console.log(x);
}

// Question 1: How do you check if 
// an element exists in an array?
// To check if an element exists in an array, you can use the `includes()` method.// The `includes()` method returns true if the array contains the specified element, and false otherwise.
//// Alternatively, you can use a loop to iterate through the array and check for the element.
// The time complexity of the `includes()` method is O(N), where N is the number of elements in the array.
// The space complexity is O(1) since it does not use any additional data structures
// for the check.

const findElement = (arr, target) => {
    for (let x of arr){
        if (x === target){
            return true;
        }
    }
    return false;
}

console.log(findElement(arr, "Hello"));
console.log(findElement(arr, "H"));
console.log(arr.includes("Hello"));

// Question 2: How do you find the index of an element in an array?
// To find the index of an element in an array, you can use the `indexOf()` method.
// The `indexOf()` method returns the first index at which a given element can be found
// in the array, or -1 if it is not present.

const findElementIndex = (arr, target) => {
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === target){
            return i;
        }
    }
    return -1;
}

console.log(findElementIndex(arr, "Hello"));
console.log(arr.indexOf("Hello"));

// How to delete, add & update elements from a specific index?
// The splice() method can be used to delete, add, or update elements from a specific index in an array.
// The splice() method modifies the original array and returns an array containing the removed elements.

console.log(arr);
arr.splice(1, 3);
console.log(arr);
arr.splice(1, 0, 2, 3, 4, 5, 6);
console.log(arr);
arr.splice(1, 3, 6, 7, 8);
console.log(arr);

// splice() vs slice()
// splice() modifies the original array, while slice() returns a new array without modifying the original.
// splice() can add, remove, or replace elements, while slice() only extracts a portion
// of the array.
// splice() is used for modifying the array, while slice() is used for extracting a subarray.
// splice() is O(N) in time complexity, while slice() is O(K) where K is the length of the subarray being extracted.
const subArr = arr.slice(1, 4); // [start, end)
console.log(subArr);


// Shallow Copy of Array

const arrB = arr;
arrB.splice(1, 4);
console.log(arrB, arr);

// Deep Copy of Array
// A deep copy creates a new array with the same elements, but changes to the new array do not affect the original array.
// A shallow copy creates a new array, but changes to the new array may affect the original array if the elements are objects or arrays.
// In JavaScript, you can create a deep copy of an array using methods like `JSON.parse(JSON.stringify(arr))`, or by using the spread operator or `Array.from()` for primitive values
// or simple arrays.
// Note: For nested arrays or objects, you need to use a method that handles deep copying
// like `JSON.parse(JSON.stringify(arr))` or a custom deep copy function.
const arrC = [...arr];
const arrD = Array.from(arr);
const arrE = arr.concat();
arrC.splice(1, 4);
arrD.splice(1, 4);
arrE.splice(1, 3);
console.log(arrC, arrD, arrE, arr);

// How to concatenate two arrays in JavaScript?
// You can concatenate two arrays using the `concat()` method or the spread operator.
// The `concat()` method returns a new array that is the result of merging two or more arrays.
// The spread operator allows you to create a new array by spreading the elements of the existing arrays
// into a new array.
// Both methods create a new array without modifying the original arrays.
// The time complexity of both methods is O(N + M), where N is the length of the first array and M is the length of the second array.
// The space complexity is O(N + M) since a new array is created to hold the concatenated elements.

const newArr = [...arr, ...arrE];
const newArr2 = arr.concat(arrE);
console.log(newArr, newArr2);

// Question 3: How can you check if two arrays are equal?
// To check if two arrays are equal, you can compare their lengths and then compare each element.
// If the lengths are not equal, the arrays are not equal.
// If the lengths are equal, you can iterate through the elements and compare them one by one
// If all elements are equal, the arrays are equal; otherwise, they are not.
// Note: This method works for arrays containing primitive values (numbers, strings, booleans).
// For arrays containing objects or nested arrays, you may need to use a deep comparison function
// or a library like Lodash's `_.isEqual()` for deep equality checks.
// The time complexity of this approach is O(N), where N is the number of elements in the arrays.
// The space complexity is O(1) since we are not using any additional data structures 

const isArrayEqual = (arr1, arr2) => {
    if (arr1.length !== arr2.length){
        return false;
    }

    for (let i = 0; i < arr1.length; i++){
        if (arr1[i] !== arr2[i]){
            return false;
        }
    }
    return true;

    // One Line solution
    // return arr1.length === arr2.length && arr1.every((ele, i) => arr1[i] === arr2[i]);
}

console.log(isArrayEqual([1, 2, 3], [1, 2, 3]));

// Question 4: How to sort an array in ascending and descending order?
// The sort() method sorts the elements of an array in place and returns the sorted array.
// The default sort order is according to string Unicode code points.
// To sort numbers in ascending or descending order, you need to provide a comparison function.
// The comparison function should return a negative, zero, or positive value, depending on the order
// you want to sort the elements in.
// For ascending order, the comparison function should return a negative value if the first argument is less than the second, zero if they are equal, and a positive value if the first argument is greater than the second.
// For descending order, you can simply reverse the comparison function.
// Note: The sort() method is not stable, meaning that the relative order of equal elements
// may not be preserved. If you need a stable sort, you can use a custom sorting
// algorithm or a library that provides stable sorting.
// The time complexity of the sort() method is O(N log N) on average, where N is the number of elements in the array.
// The space complexity is O(N) in the worst case, as it may require additional space for sorting.

const x = [1, 4, 6, 0, -9, -5];
x.sort(); // O(NlogN)
console.log(x);

x.sort((a, b) => b - a);
console.log(x);

// Question 5: How to reverse an array?
// The reverse() method reverses the elements of an array in place and returns the reversed array.

x.reverse();
console.log(x);
// Map, Filter & Reduce
// Map, Filter, and Reduce are higher-order functions in JavaScript that allow you to manipulate arrays in a functional programming style.
// They are part of the Array prototype and can be used to transform, filter, and reduce arrays.
//
// 1. Map: The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
// The time complexity of map() is O(N), where N is the number of elements in the array.
// The space complexity is O(N)
// since it creates a new array of the same length as the original array.

const newMapArr = x.map((ele, i) => ele * ele);
console.log(newMapArr);

// 2. Filter: The filter() method creates a new array with all elements that pass the test implemented by the provided function.
// The time complexity of filter() is O(N), where N is the number of elements in the array.
// The space complexity is O(N) since it creates a new array that may contain fewer elements than the original array.

const positiveNumbers = x.filter((ele, i) => ele > 0);
console.log(positiveNumbers);

// 3. Reduce: The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
// The reduce() method takes two arguments: a callback function and an initial value.
// The callback function takes four arguments: accumulator, currentValue, currentIndex, and array.
// The time complexity of reduce() is O(N), where N is the number of elements in the array.
// The space complexity is O(1) since it does not create a new array,
// but rather accumulates a single value based on the elements of the array.
// The reduce() method is often used to sum up values, concatenate strings, or perform other
// operations that result in a single value.

const sumOFArr = positiveNumbers.reduce((acc, ele) => acc + ele);
console.log(sumOFArr);
Flat: [1, 2, 4, 5, 6, 7, 8, 9]
const y = [1, 2, [4, 5, [6, 7]], 8, 9];
const flattedArray = y.flat(2);
console.log(flattedArray);

// filter() vs find()
// filter() and find() are both array methods in JavaScript, but they serve different purposes.
// filter() is used to create a new array with all elements that pass the test implemented by the provided function.
// find() is used to return the first element in the array that satisfies the provided
// filter() returns an array of all elements that match the condition, while find() returns the first element that matches the condition.

const positiveNumber = x.find((ele, i) => ele > 0);
console.log(positiveNumber);