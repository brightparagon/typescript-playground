"use strict";
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var mySelf = {
    name: 'Jeffrey',
    bankAccount: bankAccount,
    hobbies: ['Sports', 'Cooking']
};
mySelf.bankAccount.deposit(3000);
console.log(mySelf);
