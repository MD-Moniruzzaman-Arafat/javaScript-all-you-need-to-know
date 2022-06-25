

function multiply(a, b, func) {
    var c = a + b;
    var d = a - b;

    var f = func(a, b);
    return c * d * f;
}

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

var result = multiply(10, 5, sub);
console.log(result);