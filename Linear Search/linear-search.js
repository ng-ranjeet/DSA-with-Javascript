// Linear Search Algorithm Implementation
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Return the index of the target element
        }
    }
    return -1; // Return -1 if the target is not found
}  
// Example usage:
const numbers = [5, 3, 8, 4, 2];
const target = 4;
const result = linearSearch(numbers, target);
console.log(`Element found at index: ${result}`); // Output: Element found at index: 3
// If the target is not found, it will output: Element found at index: -1
// Example with a target not in the array
const notFoundTarget = 10;
const notFoundResult = linearSearch(numbers, notFoundTarget);
console.log(`Element found at index: ${notFoundResult}`); // Output: Element found at index: -1
// This implementation has a time complexity of O(n) where n is the number of elements in the array.
// It is a simple and straightforward approach to searching for an element
// in an array, but it is not the most efficient for large datasets.
// For larger datasets, consider using more efficient algorithms like binary search,
// which requires the array to be sorted, or hash-based searches.
// Note: This code is designed to be run in a JavaScript environment, such as a web browser or Node.js.
// It can be tested in any JavaScript console or environment that supports ES6 syntax.
// The linear search algorithm is a fundamental algorithm that can be used in various applications,
// such as searching for elements in lists, arrays, or any iterable data structure.
// It is particularly useful when the dataset is small or unsorted.
// Remember to handle edge cases, such as empty arrays or arrays with duplicate elements,
// as the algorithm will return the index of the first occurrence of the target element.
// You can also modify the function to return all indices of the target element if needed.


//Binary Search Algorithm Implementation
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid; // Return the index of the target element
        } else if (arr[mid] < target) {
            left = mid + 1; // Search in the right half
        } else {
            right = mid - 1; // Search in the left half
        }
    }
    return -1; // Return -1 if the target is not found
}
// Example usage:
const sortedNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const binaryTarget = 6;
const binaryResult = binarySearch(sortedNumbers, binaryTarget);
console.log(`Element found at index: ${binaryResult}`); // Output: Element found at index: 5
// If the target is not found, it will output: Element found at index: -1
// Example with a target not in the array
const binaryNotFoundTarget = 11;
const binaryNotFoundResult = binarySearch(sortedNumbers, binaryNotFoundTarget);
console.log(`Element found at index: ${binaryNotFoundResult}`); // Output: Element found at index: -1
// This implementation has a time complexity of O(log n) where n is the number of elements in the array.
// It is much more efficient than linear search for large datasets, but it requires the array to be sorted beforehand.
// The binary search algorithm is a fundamental algorithm that can be used in various applications,
// such as searching for elements in sorted lists, arrays, or any iterable data structure.
// It is particularly useful when the dataset is large and sorted.
// Remember to handle edge cases, such as empty arrays or arrays with duplicate elements,
// as the algorithm will return the index of one occurrence of the target element.

// finding a substring is present inside a string or not

// function isStringPresent(mainStr, subStr) {
//     let m = mainStr.length;
//     let n = subStr.length;
//     for(let i=0; i<= m-n; i++){
//         let slag = true;

//         for(let j =0; j<n; j++){
//             if(mainStr[i +j] != subStr[j]){
//                 slag = false;
//                 break;
//             }
//         }
//         if(slag){
//             return i;
//         }
//     }
//     return -1;
// };

// method 2
// function isStringPresent(mainStr,subStr){
//     return mainStr.indexOf(subStr);
// }

// method 3

// function isStringPresent(mainStr,subStr){
//     let m = mainStr.length;
//     let n = subStr.length;
//     for(let i=0; i< m-n; i++){
//         console.log(mainStr.slice(i, n+1))
//         if(mainStr.slice(i, n+i) === subStr){
//             return i;
//         }
//     }
//      return -1;
// }

// method 4
function isStringPresent(mainStr,subStr){
    return mainStr.includes(subStr);
}







console.log(isStringPresent("leetcode", "etc"))