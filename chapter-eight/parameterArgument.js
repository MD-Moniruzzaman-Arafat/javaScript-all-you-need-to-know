// function add(a, b) {
//     var result = a + b;
//     console.log(result);
// }
// add(10, 45)

var arr1 = [1, 2, 3, 4];
var arr2 = [5, 6, 7, 8];

function sum(arr) {
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    console.log(total);
}

sum(arr2)