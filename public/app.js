import { invoice } from "./classes/invoice.js";
const invOne = new invoice('mario', 'work on the mario website', 250);
const invTwo = new invoice('luigi', 'work on the mario website', 300);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
// looping 
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
// Getting form element
const form = document.querySelector('.new-item-form');
// Inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// Adding functionality to the form
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
