var operator;
var input = [];


// POP UP MENU
(function(){
    var operator = prompt("Select an operation: \n \t1. Add\n \t2. Subtract\n \t3. Multiply\n \t4. Divide\n \t5. Square\n \t6. Square Root");
    
// TAKING INPUT BASED ON CHOICE OF OPERATOR   
    switch (operator) {
        case "1":
        case "3":
            input.push(     parseFloat(prompt("Enter number:"))     );
            do{
                input.push(     parseFloat(prompt("Enter number:"))     );
            }while (    prompt("Do you want to enter more numbers? ( Y / y to continue )").toLowerCase() == "y"   )
        
            break;
    
        case "2":
        case "4":
            input.push(     parseFloat(prompt("Enter number:"))     );
            input.push(     parseFloat(prompt("Enter number:"))     );
            break;
        
        case "5":
        case "6":
            input.push(     parseFloat(prompt("Enter number:"))     );
            break;
             
        default:
            console.log("Wrong input!");
            break;
    }
    
// CALCULATING BASED ON CHOICE OF OPERATION
    switch (operator) {
        case "1":
            console.log(add(input));
            break;
    
        case "2":
            console.log(subtract(input));
            break;
        
        case "3":
            console.log(multiply(input));
            break;
        
        case "4":
            console.log(divide(input));
            break;
        
        case "5":
            console.log(square(input));
            break;
    
        case "6":
            console.log(root(input));
            break;
            
        
        default:
            console.log("Wrong input!");
            break;
    }
})();


// MATH FUNCTIONS
function add(numbers){
    var result = 0;
    numbers.forEach(function(number) {
        result += number
    });
    return result;
}

function subtract(numbers){
    return numbers[0] - numbers[1];
}

function multiply(numbers){
    var result = 1;
    numbers.forEach(function(number) {
        result *= number
    });
    return result;
}

function divide(numbers){
    return numbers[1] != 0 ? numbers[0] / numbers[1] : "Wrong input!";
}

function square(numbers){
    return numbers[0] * numbers[0];
}

function root(numbers){
    return numbers[0] >= 0 ? Math.sqrt(numbers[0]) : "Wrong input!";
}