console.log(' testing one two....hello world');

// A function is a set of instructions that we can execute and we can pass in data to it as inputs

// Create a function that will accept a number as an input to count down  from , and it will count down that number until it hits 0;
function countDown(num, stopNum){ //num is the parameter
    // this is the bodyof the function
    for( let i = num; i >= stopNum; i--){
        console.log(i)
    }
    console.log( "finished")


}