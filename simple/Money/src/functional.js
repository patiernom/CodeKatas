/**
 * Created by Marco on 15/02/2015.
 */

function createMoney(currency) {
    return function (amount) {
        return {
            amount: amount,
            currency: currency
        }
    }
}
function multiply(generateMoney, amount, multiplier) {
    return generateMoney(amount * multiplier);
}

function equals(generateMoneyOne, generateMoneyTwo) {
    return generateMoneyOne.amount === generateMoneyTwo.amount && generateMoneyOne.currency == generateMoneyTwo.currency;
}