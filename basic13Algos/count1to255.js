//Write a function that returns an array with all the numbers from 1 to 255. You may use the push() function for this exercise.



function get_array(){
    var arr = [];
    for(let i = 1; i<= 255; i++){
        arr.push(i);
    }
    return arr;

}
console.log(get_array())




function get_array(){
    let arr = []; //create an empty array as a function to add numbers to
    for(let i = 1; i <= 350; i++){ // loop through every number using another variable "i" to get to 350 
        arr.push(i) // push adds data to the end of an array 
    }
    return arr
}
console.log(get_array())




