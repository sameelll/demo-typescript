// Classes
class invoice {
    client: string;
    details: string;
    amount: number;

    constructor(c: string, d:string, a:number){
        this.client = c;
        this.details = d;
        this.amount = a;
    }

    format(){
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}

const invOne = new invoice('mario', 'work on the mario website', 250);
const invTwo = new invoice('luigi', 'work on the mario website', 300);

let invoices: invoice[] = [];

invoices.push(invOne);
invoices.push(invTwo)

console.log(invoices);
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