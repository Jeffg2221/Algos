//Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])


const arr1 = [1, 5, 10, -2]

function maxMinAvg(arr) {

    let max = arr[0]; // equal to first value of array
    let min = arr[0];// equal to first value of array
    let sum = arr[0];// equal to first value of array

    for (let i = 1; i < arr.length; i++) { // for loop to loop through length of array
        if (arr[i] > max) {
            max = arr[i]; // if array of i is greater than current max set max to current value
        }
        if (arr[i] < min) {
            min = arr[i];
        }
        sum = sum + arr[i];
    }
    let avg = sum / arr.length;
    let arrnew = [max,min,avg];
    return arrnew;

}

console.log(maxMinAvg(arr1))