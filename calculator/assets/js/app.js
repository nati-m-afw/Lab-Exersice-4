function add(numbers){
    var result = 0;
    numbers.forEach(function(number) {
        result += number
    });
    return result;
}

function subtract(x, y){
    return x - y;
}

function multiply(numbers){
    var result = 1;
    numbers.forEach(function(number) {
        result *= number
    });
    return result;
}

function divide(x, y){
    return y != 0 ? x / y : "Wrong input!";
}

function square(x){
    return x * x;
}

function root(x){
    return x >= 0 ? Math.sqrt(x) : "Wrong input!";
}