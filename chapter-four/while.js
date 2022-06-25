// var a = 1;
// while (a <= 10) {
//     console.log(a);
//     a++;
// }

var a = true;

while (a) {
    var random = Math.floor(Math.random() * 10);
    console.log(random)
    if (random == 5) {
        a = false
    }
}