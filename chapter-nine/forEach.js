var arr = [4, 5, 6, 7, 8, 9];
// arr.forEach(function (value, index, arr) {
//     console.log(value, index, arr);
// })

arr.forEach(function (value) {
    value += 5;
    console.log(value);
})

console.log(arr)