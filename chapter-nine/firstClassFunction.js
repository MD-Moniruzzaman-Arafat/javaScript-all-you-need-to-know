function add(a, b) {
    return a + b
}

var result = add;
console.log(result(10, 50));

var arr = []
arr.push(add);
console.log(arr);
console.log(arr[0](5, 5))

var obj = {
    sum: add
}

console.log(obj)
console.log(obj.sum(4, 7));

setTimeout(function () {
    console.log('ami 3 second waiting')
}, 3000)