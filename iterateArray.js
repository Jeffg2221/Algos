// Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8, [-5,2,5,12] returns 14)
const arr1 = [1,2,5]
function iterArr(arr){ // putting arr in the function allows be to add an array in the console.log later on to test the actual function logic
    let sum = 0; // holding the sum value to be called on later
    for(let i = 0; i < arr.length; i++){ // loops through the length of any array and iterate by 1
        sum = sum + arr[i]; // adds the sum to the next value in the array 
    }
    return sum 
}
console.log(iterArr(arr1))