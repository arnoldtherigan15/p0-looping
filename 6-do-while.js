/*
*  _____          __          ___     _ _      
* |  __ \         \ \        / / |   (_) |     
* | |  | | ___     \ \  /\  / /| |__  _| | ___ 
* | |  | |/ _ \     \ \/  \/ / | '_ \| | |/ _ \
* | |__| | (_) |     \  /\  /  | | | | | |  __/
* |_____/ \___/       \/  \/   |_| |_|_|_|\___|
*/


//! How to "DO While" ?
/*
*   A do...while statement creates a loop that executes a block of code once, 
*   checks if a condition is true, and then repeats the loop as long as the condition is true. 
*   They are used when you want the code to always execute at least once. 
*   The loop ends when the condition evaluates to false.



?    do {
?        statement
?    }
?    while (condition);
*/


//! Write your first Loop
var i = 5
do {
    console.log("Masuk <<< do while");
    i++
} while(i < 5)
console.log("---------------------");
var j = 5
while(j < 5) {
    console.log("Masuk while");
    j++
}







//! Difference between While and Do While loop

/*
*   In While loop, the condition tested at the beginning of the loop, 
*   and if the condition is True, statements inside the loop will execute. 
*   It means the While loop executes the code block only if the condition is True.

*   At the end of the loop, the Do While loop tests the condition. 
*   So, Do While executes the statements in the code block at least once even if the condition Fails.

var i = 1
do {
    console.log(i,">>>>>>>>> DO WHILE");
    i++
} while (i < 5);

var i = 1
while (i < 5) {
    i++
    console.log(i,">>>>>>>>> WHILE");
}
*/




