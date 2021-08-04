/*
* __          ___     _ _          _                       
* \ \        / / |   (_) |        | |                      
*  \ \  /\  / /| |__  _| | ___    | |     ___   ___  _ __  
*   \ \/  \/ / | '_ \| | |/ _ \   | |    / _ \ / _ \| '_ \ 
*    \  /\  /  | | | | | |  __/   | |___| (_) | (_) | |_) |
*     \/  \/   |_| |_|_|_|\___|   |______\___/ \___/| .__/ 
*                                                   | |    
*                                                   |_|    
*/


//! How to "While Loop" ?
/*
*    The while statement is used to create a loop that continues to execute 
*    the statement as long as the condition evaluates to true. 
*    You are required to write both the condition and the statement.

?    while (condition) {
?        statement;
?    }
*/

// for(var i = 0; i < 5; i++) {
//     console.log("Hello");
// }

//! Write your first Loop
// var i = 0
// while(i < 5) {
//     console.log("Hello World");
//     i++
// }








//! When to use while over for loop ?

/*
*    you should use while is when you don’t know how many times you need to execute the code.

?   You are required to roll a dice. 
?    You also need to show how many times you roll the dice until number 3 is returned

*    PSEUDOCODE

*    STORE "randomResult" WITH 0
*    STORE "loopCount" WITH 0
*    WHILE "randomResult" NOT EQUAL TO 3
*        SET "randomResult" WITH random number beetween 1 to 6
*        INCREMENT "loopCount" WITH 1
*    END WHILE
*    DISPLAY "The random result: " CONCAT "randomResult"
*    DISPLAY "The number of loops: " CONCAT "loopCount"
*/

// var randomResult = 0
// var loopCount = 0

// while(randomResult != 3) {
//     randomResult = Math.ceil(Math.random()*6)
//     console.log(randomResult);
//     loopCount++
//     // console.log("masukkkkkkkk");
// }
// console.log("The number of loops: ", loopCount);
console.log(Math.ceil(Math.random()*6));










//! While infinite loop

/*
*   Initiate an infinite loop

*    while (true) {
*        execute code forever
*    }
*/
var i = 0
while(true) {
    if(i == 10) break
    console.log("masuk");
    i++
}