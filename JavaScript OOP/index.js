/*
    4 Pillars of Object-oriented Programming

        1) Encapsulation
        2) Abstraction
        3) Inheritance
        4) Polymorphism

*/

let baseSalary = 30_000;
let overtime = 10;
let rate = 20;

// Normal function with so many parameters
function getWage(baseSalary, overtime, rate) {
  return baseSalary + overtime * rate;
}

// Encapsulation
let employee = {
  //  now they are properties,
  //  they don't need to place on harddisk cuz they are not variables
  baseSalary: 30_000,
  overtime: 10,
  rate: 20,
  // fewer and fewer parameters
  getWage: function () {
    return this.baseSalary + this.overtime * this.rate;
  },
};
// in OOP they are unit
employee.getWage();

// Robert C Martin said the best functions are those with no parameters
// if fewer the number of parameter the easier it is to use and maintain

// Encapsulation -> Reduce complexity + increase reusability

// Abstraction  -> Reduce complexity + isolate impact of changes ( Hide details, show essentials)

// Inheritance  -> Eliminate redundant code

// Polymorphism -> Refactor ugly switch / case statements

// poly = many
// morphism = form
