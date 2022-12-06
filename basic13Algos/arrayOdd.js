
// Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.
function oddNumbers(){
    let arr = [] // creates an array to be returned at end

    for( let i = 1; i <= 50; i++){ // loops through all numbers 1 to 50
        if( i % 2 ===1){ // pulls all numbers that odd
            arr.push(i) // pushes the odd numbers into array 
        }

    }
    return arr
}
console.log(oddNumbers())