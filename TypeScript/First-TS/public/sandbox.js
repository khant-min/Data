//// to select specific html attributes
const aTag = document.querySelector("a"); // if developer exactly know there is html tag
// console.log(aTag.href);
// console.log(aTag?.href); // developer doesn't sure if there is selete html tag
//// to select id and classes which can be every attribute
const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const tofrom = document.querySelector(".tofrom");
/// in this way we don't need to put ! or ? because 'as' sure that which element is selected
/// if we want to listen events
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value);
    console.log(tofrom.value);
});
// const invThree = new Invoice2("khant", "work on the khant website", 200);
// const invFour = new Invoice2("min", "work on the min website", 400);
let invoices = [];
const me = {
    name: "shaun",
    age: 23,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log("I spend ", amount);
        return amount;
    },
};
export {};
