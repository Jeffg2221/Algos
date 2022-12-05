//Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])


const arr1 = [1, 5, 10, -2]

function maxMinAvg(arr) {

    let max = arr[0];
    let min = arr[0];
    let sum = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
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