// Given an array with multiple values, write a function that replaces each value in the array with the product of the original value multiplied by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])


const arr1 =[1,4,8, 10]

function squareVal(arr){
    for( let i = 0; i < arr.length; i++){
        arr[i] = arr[i] * arr[i];

    }
    return arr
    
}
console.log(squareVal(arr1))