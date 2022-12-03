// Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])


const arr1 =[1,5,10,-2]
const arr2 =[1,-2,10,-2]
const arr3 =[15,-5,-10,-2]

function noNeg(arr) {
    for(let i = 0; i<arr.length; i++){ // loops through array looking for negative numbers
        if(arr[i] < 0){ // checks if the number is less then 0 ie..(negative)
            arr[i] = 0 // if negative we assign the number to be 0
        }
    }
    return arr
}

console.log(noNeg(arr1))
console.log(noNeg(arr2))
console.log(noNeg(arr3))