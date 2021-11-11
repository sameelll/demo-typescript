"use strict";
// Classes
var invoice = /** @class */ (function () {
    function invoice(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    invoice.prototype.format = function () {
        return this.client + " owes $" + this.amount + " for " + this.details;
    };
    return invoice;
}());
var invOne = new invoice('mario', 'work on the mario website', 250);
var invTwo = new invoice('luigi', 'work on the mario website', 300);
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);
// Getting form element
var form = document.querySelector('.new-item-form');
// Inputs
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
// Adding functionality to the form
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
