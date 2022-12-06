//Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).

const  arr1 =[3,22,44,1,7,33];

function greaterY(arr, y) { //
    
    let count = 0;// keeping values of each variable larger than y
    for(let i = 0; i < arr.length; i++){ // for loop iterates through each item in array
        if(arr[i]> y){ // if statement saying if number in array is larger than y
            count++; // increase count by 1 if so
        }
    }
    return count
}

console.log(greaterY(arr1,5))