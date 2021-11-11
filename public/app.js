// Imports 
import { invoice } from "./classes/invoice.js";
import { listTemplate } from "./classes/listTemplate.js";
import { payment } from "./classes/payment.js";
let docOne;
let docTwo;
docOne = new invoice('yoshi', 'web work', 250);
docTwo = new payment('mario', 'plumbing work', 200);
let docs = [];
docs.push(docOne);
docs.push(docTwo);
// Getting form element
const form = document.querySelector('.new-item-form');
// Inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// list template instance 
const ul = document.querySelector('ul');
const list = new listTemplate(ul);
// Adding functionality to the form
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
