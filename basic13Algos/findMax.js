// Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)
const arr1= [-3,3,5,7]
const arr2 = [22,55,100,20]
const arr3 = [22,22,22,50]

function findMax(arr){
    let max = arr[0]; // create a variable to hold the value of arr
    for(let i = 0; i < arr.length; i++){ // loop through the array 
        if(max < arr[i]){ // check if max is less than the current arr value
            max = arr[i]; // assign max to array if it is a greater number 
        }
    }
    return max;
}
console.log(findMax(arr1))
console.log(findMax(arr2))
console.log(findMax(arr3))