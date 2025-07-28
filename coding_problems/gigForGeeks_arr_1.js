// Input: arr[] = [1, 2, 3, 7, 5], target = 12
// Output: [2, 4]
// Explanation: The sum of elements from 2nd to 4th position is 12.

// Input: arr[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], target = 15
// Output: [1, 5]
// Explanation: The sum of elements from 1st to 5th position is 15.

// o(n^2) time and o(n) space
// steps:
// 1. start iteration from 1 to n 
// 2. check straight from i to i++ untill count of elements is equal to target, \
//     2.1 if count == target : add i and last i++ (indexes) in output arr
//     2.2 if count > target : skip the current iteration and move to next loop - repeat 1 to 2.2



// Function to find a continuous sub-array which adds up to
// a given number.
function subarraySum(arr, target) {

    // Initialize window
    let s = 0, e = 0;
    let res = [];

    let curr = 0;
    for (let i = 0; i < arr.length; i++) {
        curr += arr[i];

        // If current sum becomes more or equal,
        // set end and try adjusting start
        if (curr >= target) {
            e = i;

            // While current sum is greater, 
            // remove starting elements of current window
            while (curr > target && s < e) {
                curr -= arr[s];
                s++;
            }

            // If we found a subarray
            if (curr === target) {
                res.push(s + 1);
                res.push(e + 1);
                return res;
            }
        }
    }
    // If no subarray is found
    return [-1];
}

// Driver Code
let arr = [15, 2, 4, 8, 9, 5, 10, 23];
let target = 15;
let res = subarraySum(arr, target);

console.log(res.join(' '));


// test practice code
function test() {
    try {
        console.log('try test')
        throw new Error();
    }
    catch(e) { // catch can work without passing (e)
        console.log('catch test',e);
        let arrObj = [{id:1,'name':'shreya'},{id:2,'name':'sujit'}];

        for (const el of arrObj) {
            
        }

    }
}

console.log(test())