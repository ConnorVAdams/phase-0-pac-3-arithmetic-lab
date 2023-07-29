function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function increment(x) {
    return x + 1;
}

function decrement(x) {
    return x - 1;
}

function makeInt(string) {
    return parseInt(string, 10);
}

makeInt("2.54");

function preserveDecimal(float) {
    return parseFloat(float);
}

preserveDecimal(2.54);