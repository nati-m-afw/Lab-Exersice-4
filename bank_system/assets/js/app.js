// var person1 = {
//     id: 01,
//     pin: 1111,
//     balance: 10000   
// }

// var person2 = {
//     id: 02,
//     pin: 2222,
//     balance: 2000
// }

(function(){
    let user = {
        accountNo: 01,
        name: "Person 1",
        balance: 2000
    }

    do{
        var transactionType = prompt("Welcome " + user.name + ". Select a transaction: \n \t1. Deposit\n \t2. Withdrawal\n \t3. Balance Inquery\n \t4. Transferal");
        
        switch (transactionType) {
            case "1":
                deposit(    parseFloat(prompt("How much would you like to deposit?")) ,  user   );
                console.log("Your account balance is " + balance(user) + " Birr.");
                break;
        
            case "2":
                withdraw(    parseFloat(prompt("How much would you like to withdraw?")) ,  user   );
                console.log("Your account balance is " + balance(user) + " Birr.");
                break;
            
            case "3":
                console.log("Your account balance is " + balance(user) + " Birr.");
                break;
            
            case "4":
                prompt("Enter the recepeint's account number:");
                transfer(    parseFloat(prompt("How much would you like to transfer?")) ,  user   );
                console.log("Your account balance is " + balance(user) + " Birr.");
                break;
                    
            
            default:
                console.log("Wrong input!");
                break;
        }

    }while(    prompt("Would you like to continue? ( Y / y to continue )").toLowerCase() == "y"     )


})();


function deposit(deposit, user){
    user.balance += deposit;
}

function withdraw(withdrawal, user){
    user.balance -= withdrawal;
}

function balance(user){
    return user.balance;
}

function transfer(amountToBeTransferred, user){
    user.balance -= amountToBeTransferred;
}