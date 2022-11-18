//// to select specific html attributes

const aTag = document.querySelector("a")!; // if developer exactly know there is html tag
// console.log(aTag.href);
// console.log(aTag?.href); // developer doesn't sure if there is selete html tag

//// to select id and classes which can be every attribute

const form = document.querySelector(".new-item-form") as HTMLFormElement;

const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector(".tofrom") as HTMLInputElement;
/// in this way we don't need to put ! or ? because 'as' sure that which element is selected

/// if we want to listen events
form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  console.log(type.value);
  console.log(tofrom.value);
});

///// Classes and Acess Modifiers

// class Invoice {
//   readonly client: string;
//   private details: string;
//   public amount: number;
//   constructor(c: string, d: string, a: number) {
//     this.client = c;
//     this.details = d;
//     this.amount = a;
//   }
//   format() {
//     return `${this.client} owes $${this.amount} for ${this.details}`;
//   }
// }

// const invOne = new Invoice("mario", "work on the mario website", 250);
// const invTwo = new Invoice("relige", "work on the relige website", 300);

// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);

// invoices.forEach(inv => {
//   console.log(inv.client, inv.amount, inv.format());
// });

//// You can do this when only use acess modifiers
// class Invoice2 {
//   constructor(
//     readonly client: string,
//     private details: string,
//     public amount: number
//   ) {
//     /* when we passing these values to the constructor, it automatically
//        assign these values to properties of these name. But only if the
//        front of these names have access modifiers */
//   }
//   format() {
//     return `${this.client} owes $${this.amount} for ${this.details}`;
//   }
// }

// module system
import { Invoice } from "./classes/Invoice";
// const invThree = new Invoice2("khant", "work on the khant website", 200);
// const invFour = new Invoice2("min", "work on the min website", 400);

let invoices: Invoice[] = [];
// invoices.push(invThree);
// invoices.push(invFour);

// invoices.forEach(inv => {
//   console.log(inv.client, inv.amount, inv.format());
// });

/// interfaces

interface IsPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

const me: IsPerson = {
  name: "shaun",
  age: 23,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    console.log("I spend ", amount);
    return amount;
  },
};
