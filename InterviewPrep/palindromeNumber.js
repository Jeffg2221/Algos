// Given an integer x, return true if x is a 
//palindrome
//, and false otherwise.

const int1 = 121

var isPalindrome = function(x) {
    let reversed = x.toString().split('').reverse().join('')
    return (x.toString() === reversed)
    
};

console.log(isPalindrome(int1))
