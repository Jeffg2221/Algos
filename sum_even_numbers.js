
//Write a function that would get the sum of all the even numbers from 1 to 1000. You may use a modulus operator for this exercise.



function sum_even_numbers() {
    let sum = 0; // create a container for the sum of our numbers 
    for (let i = 0; i <= 1000; i++) { //loop over the numbers up to 1000
        if (i % 2 === 0) { // if the numbers are even 
            sum += i;// add sum to i
        }
    }
    return sum
}
console.log(sum_even_numbers())


