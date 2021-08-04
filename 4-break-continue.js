/*
*  ____                 _                       _     _____            _   _                  
* |  _ \               | |                     | |   / ____|          | | (_)                 
* | |_) |_ __ ___  __ _| | __    __ _ _ __   __| |  | |     ___  _ __ | |_ _ _ __  _   _  ___ 
* |  _ <| '__/ _ \/ _` | |/ /   / _` | '_ \ / _` |  | |    / _ \| '_ \| __| | '_ \| | | |/ _ \
* | |_) | | |  __/ (_| |   <   | (_| | | | | (_| |  | |___| (_) | | | | |_| | | | | |_| |  __/
* |____/|_|  \___|\__,_|_|\_\   \__,_|_| |_|\__,_|   \_____\___/|_| |_|\__|_|_| |_|\__,_|\___|
*/

//* The break statement "jumps out" of a loop.
//* The continue statement "jumps over" one iteration in the loop.

// for(var i = 1; i <= 10; i++) {
//     // if(i % 2 == 0) { // Genap
//     //     continue
//     // } 
//     if (i == 5) {
//         console.log("masukkkk ", i);
//         break
//     }
//     console.log("masuk",i);
// }
// console.log("keluar looping");

for(var i = 0; i < 5; i++) {
    if(i == 1 || i == 2) continue
    console.log(i,'<<<<');
}