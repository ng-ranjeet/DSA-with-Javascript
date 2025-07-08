// recursion is a process in which a function calls itself as a subroutine. This allows the function to be repeated several times, as it can call itself during its execution.
function factorial(n) {
  // Base case: if n is 0 or 1, return 1
  if (n === 0 || n === 1) {
    return 1;
  }
  // Recursive case: n * factorial of (n - 1)
  return n * factorial(n - 1);
}
// Example usage:
console.log(factorial(5)); // Output: 120
// Explanation:
// The function `factorial` calculates the factorial of a number `n`. If `n` is 0 or 1, it returns 1 (the base case). Otherwise, it multiplies `n` by the factorial of `n - 1`, effectively reducing the problem size until it reaches the base case. This is a classic example of recursion, where the function calls itself with a smaller argument until it reaches a simple case that can be solved directly. The result is the factorial of the original number, which is the product of all positive integers up to that number.

function fibonacci(n) {
  // Base case: if n is 0, return 0; if n is 1, return 1
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  // Recursive case: sum of the two preceding numbers
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Example usage:
console.log(fibonacci(6)); // Output: 8
// Explanation:
// The function `fibonacci` calculates the nth Fibonacci number. The base cases are defined for `n` equal to 0 and 1, returning 0 and 1 respectively. For any other value of `n`, the function calls itself recursively to compute the sum of the two preceding Fibonacci numbers, `fibonacci(n - 1)` and `fibonacci(n - 2)`. This continues until the base cases are reached, allowing the function to build up the Fibonacci sequence from the ground up. The result is the nth Fibonacci number, which is the sum of the two numbers before it in the sequence.

function sumArray(arr) {
  // Base case: if the array is empty, return 0
  if (arr.length === 0) {
    return 0;
  }
  let lastElement = arr.pop(); // Get the last element of the array
  // Remove the last element from the array
  // Recursive case: first element + sum of the rest of the array
  return lastElement + sumArray(arr);
}
console.log(sumArray([1, 2, 3, 4, 5,6])); // Output: 21
// Explanation:
// The function `sumArray` calculates the sum of all elements in an array. The base case checks if the array is empty, in which case it returns 0. If the array is not empty, it removes the last element using `pop()` and stores it in `lastElement`. The function then calls itself recursively with the remaining elements of the array. The result is the sum of the last element and the sum of the rest of the array. This process continues until the array is empty, at which point the base case is triggered, and the recursion unwinds, returning the total sum of the array elements.

function reverseString(str) {
  // Base case: if the string is empty or has one character, return it
  if (str.length <= 1) {
    return str;
  }
  let lastElement = str.charAt(str.length - 1); // Get the last character of the string
  // Recursive case: last character + reverse of the rest of the string
  return lastElement + reverseString(str.slice(0, -1));
}
// Example usage:
console.log(reverseString("hello")); // Output: "olleh"
// Explanation:
// The function `reverseString` reverses a given string. The base case checks if the string is empty or has only one character, in which case it returns the string as is. If the string has more than one character, it retrieves the last character using `charAt(str.length - 1)` and stores it in `lastElement`. The function then calls itself recursively with the rest of the string, excluding the last character, using `str.slice(0, -1)`. The result is the last character concatenated with the reversed version of the rest of the string. This process continues until the base case is reached, at which point the recursion unwinds, returning the reversed string.


// Time and Space Complexity of Recursion
// Time Complexity: The time complexity of a recursive function depends on the number of recursive calls made. For example, the time complexity of the factorial function is O(n) because it makes n recursive calls, while the Fibonacci function has a time complexity of O(2^n) due to the exponential growth of recursive calls. The sumArray and reverseString functions have a time complexity of O(n) because they process each element of the array or string once.
// Space Complexity: The space complexity of a recursive function is determined by the maximum depth of the recursion stack. For the factorial, sumArray, and reverseString functions, the space complexity is O(n) because they can go as deep as n levels in the recursion stack. The Fibonacci function has a space complexity of O(n) as well, but due to the nature of its recursive calls, it can lead to a large number of function calls being active at the same time, which can increase memory usage significantly.

// Tail Recursion
// Tail recursion is a specific case of recursion where the recursive call is the last operation in the function. This allows some programming languages to optimize the recursion and avoid increasing the call stack size, effectively converting the recursion into an iterative process. In JavaScript, tail call optimization is not widely supported, but understanding the concept is important for languages that do support it.    

function tailRecursiveFactorial(n, accumulator = 1) {
  // Base case: if n is 0 or 1, return the accumulator
  if (n === 0 || n === 1) {
    return accumulator;
  }
  // Recursive case: call with n - 1 and update the accumulator
  return tailRecursiveFactorial(n - 1, n * accumulator);
}
// Example usage:
console.log(tailRecursiveFactorial(5)); // Output: 120
// Explanation:
// The function `tailRecursiveFactorial` calculates the factorial of a number `n` using tail recursion. The base case checks if `n` is 0 or 1, in which case it returns the `accumulator`, which holds the result of the factorial calculation. The recursive case calls the function with `n - 1` and updates the `accumulator` by multiplying it with `n`. This way, the recursive call is the last operation performed in the function, allowing for potential optimization by the JavaScript engine. The result is the factorial of the original number, calculated without increasing the call stack size significantly, as the previous calls are no longer needed once the next call is made.

// =================PRACTICE SECTION ====================================

//Q1 Check whether a string is palindrome or not

function isPalindrome(str) {
    if(str.length <=1){
        return true;
    }
    if(str.charAt(0) !== str.charAt(str.length -1)){
        return false;
    }
    return isPalindrome(str.slice(1,-1))
}
// console.log(isPalindrome('hello'))// olleh

// Create pow(x, n) function which returns x^n

function pow(x,n){
    if(n == 0) return 1;
    return x * pow(x,n-1);
}

// console.log(pow(5,4)) //625

// Create a function which returns the sum of digits of a number (e.g., sumOfDigits(453) is 12)

function sumOfDigits(num){
    if(num == 0) return 0;
    return (num%10) + sumOfDigits(Math.floor(num/10));
}
// console.log(sumOfDigits(4585743))

//Create a function which returns the number of digits in a number (e.g., countDigits(453) is 3)

function countDigits(num){
    return num.toString().length;
    
    // using a loop
    // let count = 0;
    // while(num%10 !=0){
    //     count++;
    //     num = Math.floor(num/10);
    // }
    // return count;
}

// console.log(countDigits(4578234567)) // 10

//Q Create a function to find the LCM of two numbers

function HCF(a, b) {
    if (b === 0) return a;
    return HCF(b, a % b);
}

function LCM(num1, num2) {
    return (num1 * num2) / HCF(num1, num2);
}

// console.log(LCM(12,18))
// console.log(HCF(12,18))

// Create a function to reverse a string
function strReverse(str){
    let len = str.length;
    if(len == 0) return '';
    return str[len-1] + strReverse(str.slice(0,-1));
}
console.log(strReverse("string"))