import {invoice} from "./classes/invoice.js";

const invOne = new invoice('mario', 'work on the mario website', 250);
const invTwo = new invoice('luigi', 'work on the mario website', 300);

let invoices: invoice[] = [];

invoices.push(invOne);
invoices.push(invTwo)

// looping 
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});

// Getting form element
const form = document.querySelector('.new-item-form') as HTMLFormElement;

// Inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// Adding functionality to the form
form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber
    );
})