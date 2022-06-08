// The Fibonacci Sequence

// The Fibonacci sequence appears in nature all around us, in the arrangement of seeds in a sunflower and the spiral of a nautilus for example.

// The Fibonacci sequence begins with  and  as its first and second terms. After these first two elements, each subsequent element is equal to the sum of the previous two elements.

// Programmatically:

// Given , return the  number in the sequence.

// Example

// The Fibonacci sequence to  is . With zero-based indexing, .

// Function Description

// Complete the recursive function  in the editor below.

// fibonacci has the following parameter(s):

// int n: the index of the sequence to return
// Returns
// - int: the  element in the Fibonacci sequence

// Input Format

// The integer .

// Constraints

// Sample Input

// STDIN   Function
// -----   --------
// 3       n = 3
// Sample Output

// 2
// Explanation

// The Fibonacci sequence begins as follows:

// ...

// In the sequence above,  is .

function processData(input) {
    var n = parseInt(input);
    console.log(fibonacci(n));
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});

function fibonacci(n) {
    if (n<=0) {
        return 0;
    } else if (n==1) {
        return 1;
    } else {
        return fibonacci(n-1) + fibonacci(n-2);
    }


}
