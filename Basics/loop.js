// Question 1: Sum of all natural numbers from 1 to n

function sumOfNumbers(num){
    let sum = 0;
    for(let i =0; i<num;i++){
        sum=sum+i;
    }
    return sum;
}

console.log(sumOfNumbers(10)); // Output: 45

// Question 2: Print all even numbers from 1 to n
function printEvenNumbers(num){
    let evenNumbers = [];
    for(let i = 1; i <= num; i++){
        if(i % 2 === 0){
            evenNumbers.push(i);
        }
    }
    return evenNumbers;
}

// Question 2: Sum of digits of a number

function sumOfDigits(num) {
    let sum = 0;
    while (num > 0) {
        sum += num % 10; // Add the last digit to sum
        num = Math.floor(num / 10); // Remove the last digit
    }
    return sum;
}
