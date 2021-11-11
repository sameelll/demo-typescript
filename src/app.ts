// Imports 
import { invoice } from "./classes/invoice.js";
import { listTemplate } from "./classes/listTemplate.js";
import { payment } from "./classes/payment.js"
import { HasFormatter } from "./interfaces/HasFormatter.js" 

let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new invoice('yoshi', 'web work', 250);
docTwo = new payment('mario', 'plumbing work', 200);

let docs: HasFormatter[] = [];

docs.push(docOne);
docs.push(docTwo);

// Getting form element
const form = document.querySelector('.new-item-form') as HTMLFormElement;

// Inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// list template instance 
const ul = document.querySelector('ul')!;
const list = new listTemplate(ul)

// Adding functionality to the form
form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let doc: HasFormatter;

    if(type.value === 'invoice'){
        doc = new invoice(tofrom.value, details.value, amount.valueAsNumber)
    } else {
        doc = new payment(tofrom.value, details.value, amount.valueAsNumber)
    }

    list.render(doc, type.value, 'end');
})