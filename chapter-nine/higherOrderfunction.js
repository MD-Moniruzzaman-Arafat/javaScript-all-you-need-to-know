function add(a, b) {
    return a + b;
}

function multiply(a, b, func) {
    var c = a + b;
    var d = a - b;

    var f = func(a, b);
    return c * d * f;
}

var result = multiply(10, 5, add);
console.log(result);