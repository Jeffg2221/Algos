
// Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999)

function sum_odd_numbers(){
    let sum = 0; // make a variable to hold sum value
    for(let i = 0; i<=5000; i++){ // iterate through the odd numbers up to 5000
        if(i % 2 === 1){ // if the number is odd
            sum += i; // add 1
        }
    }
    return sum;
}
console.log(sum_odd_numbers())