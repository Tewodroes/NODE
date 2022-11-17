
const pi = 3.141592653589793;

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

    
module.exports = {
    pi,   
    add,
    subtract,
    multiply,
    divide   
};

const math = require('./my_math');
console.log("3 + 5 = " + math.add(3, 5));
console.log("3 - 5 = " + math.subtract(3, 5));
console.log("3 * 5 = " + math.multiply(3, 5));
console.log("3 / 5 = " + math.divide(3, 5));
console.log("PI = " + math.pi);
                                      
   