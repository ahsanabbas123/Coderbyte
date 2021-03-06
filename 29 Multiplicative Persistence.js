/*
Challenge
Using the JavaScript language, have the function MultiplicativePersistence(num) take the num parameter being passed which will always be a positive integer and return its multiplicative persistence which is the number of times you must multiply the digits in num until you reach a single digit. For example: if num is 39 then your program should return 3 because 3 * 9 = 27 then 2 * 7 = 14 and finally 1 * 4 = 4 and you stop at 4. 
Sample Test Cases
Input:4
Output:0

Input:25
Output:2
*/



function MultiplicativePersistence(num) { 
    function numToArray(n){
        return n.toString().split("");
    }    
    function mult(a,b){
        return parseInt(a)*parseInt(b);
    }
    var counter = 0;
    while (num.toString().length > 1){
        num = numToArray(num).reduce(mult);
        counter++;
    }
    return counter;       
}










