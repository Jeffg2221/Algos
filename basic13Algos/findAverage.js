// Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)

// const arr1 = [1,3,5,7,20]
// const arr2 = [35,50,21,22]

// function findAvg(arr) {
//     let avg = 0;
//     let sum = 0; // holds the sum of the array
//     let totalItems = arr.length;

//     for(let i = 0; i < arr.length; i++){ // loops through the array 
//         sum += arr[i]; // adds all values in  array 
//     }
//     avg = sum/totalItems;
//     return avg;
// }
// console.log(findAvg(arr1))
// console.log(findAvg(arr2))

// Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)

const arr1 = [1,3,5,7,20]
const arr2 = [35,50,21,22]

function findAvg(arr) {
    
    let sum = 0; // holds the sum of the array
    

    for(let i = 0; i < arr.length; i++){ // loops through the array 
        sum += arr[i]; // adds all values in  array 
    }
    
    return sum / arr.length
}
console.log(findAvg(arr1))
console.log(findAvg(arr2))