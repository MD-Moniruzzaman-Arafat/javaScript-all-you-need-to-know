/*
for(initializer;condition;increment/decrement){

}
*/

// for (var i = 0; i < 100; i++) {
//     console.log('hello world');
// }

// for (var i = 0; i < 100; i++) {
//     console.log(i);
// }

// for (var i = 0; i < 100; i++) {
//     console.log(i + 1);
// }

// for (var i = 0; i < 100; i++) {
//     if (i % 2 == 0) {
//         console.log(i + " even number")
//     }
//     if (i % 2 == 1) {
//         console.log(i + " odd number")
//     }
// }
var sum = 0;
for (var i = 0; i <= 10; i++) {
    var result = sum + " + " + i + " = " + (sum + i);
    sum += i;
    console.log(result)
}
