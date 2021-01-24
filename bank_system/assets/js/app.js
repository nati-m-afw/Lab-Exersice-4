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
        id: 01,
        balance: 2000
    }

    var choice = prompt("Welcome to the Bank. Select a transaction: \n \t1. Deposit\n \t2. Withdrawal\n \t3. Balance Inquery\n \t4. Transferal");
    

    


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