//Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).

const arr1 = [1,5,10,-2]
const arr2 = [13,5,10,-55]

function swap(arr){

    let temp = arr[0] // holds the value of the first index of the array 

    arr[0] = arr[arr.length - 1]; // assigns the last index of the array to the first index of the array 
    arr[arr.length-1] = temp; // assigns the first index of the array which is the temp variable to the last index of the array 
    return arr
}

console.log(swap(arr1))
console.log(swap(arr2))