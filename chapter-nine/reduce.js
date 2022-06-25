var arr = [4, 5, 6, 7, 8];

var result = arr.reduce(function (prev, curr) {
    // console.log(prev, curr)
    return prev + curr;
})

console.log(result)