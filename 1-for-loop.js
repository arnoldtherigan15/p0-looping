/*
*  ______            _                       
* |  ____|          | |                      
* | |__ ___  _ __   | |     ___   ___  _ __  
* |  __/ _ \| '__|  | |    / _ \ / _ \| '_ \ 
* | | | (_) | |     | |___| (_) | (_) | |_) |
* |_|  \___/|_|     |______\___/ \___/| .__/ 
*                                     | |    
*                                     |_|    
*/

//! How to "For Loop" ?
/*
?    for ([initialization]; [condition]; [final-expression]) {
?        statement
?    }

*    1.  initialization - Run before the first execution on the loop. 
*        This expression is commonly used to create counters. 
*    2.  condition - Expression that is checked prior to the execution of every iteration. 
*        If it evaluates to true, the loop’s statement is executed. 
*        If it evaluates to false, the loop stops.
*    3.  final-expression - Expression that is run after every iteration. 
*        Usually used to increment a counter. But it can be used to decrement a counter too.
*    4.  statement - Code to be repeated in the loop
*/

// for (var i = 0; i <= 5; i++) {
//     console.log("Hello World", ">>>>>>>", i);
// }

for(var i = 5; i >= 0; i--) {
    console.log("masukk", i);
}