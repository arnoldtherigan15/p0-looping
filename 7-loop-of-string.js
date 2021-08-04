/*
*  ______              _____ _        _             
* |  ____|            / ____| |      (_)            
* | |__ ___  _ __    | (___ | |_ _ __ _ _ __   __ _ 
* |  __/ _ \| '__|    \___ \| __| '__| | '_ \ / _` |
* | | | (_) | |       ____) | |_| |  | | | | | (_| |
* |_|  \___/|_|      |_____/ \__|_|  |_|_| |_|\__, |
*                                              __/ |
*                                             |___/ 
*/

/*
*   The length property of a String object contains the length of the string

var str = "kuku kaku kaka kakekku kaku kaku"
console.log(str.length)

*/

var str = "Hello"
//         01234  5 ? undefined

for(var x = 0; x < str.length; x++) {
    console.log(str[x]);
}