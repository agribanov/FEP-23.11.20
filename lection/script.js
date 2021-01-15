'use strict';

// Обьектно Ооринтированное Програмирование
// var person = {
//     name: 'alex',
//     sayHi: function () {
//         console.log(this);
//     },
// };

// person.sayHi();

// var a = person.sayHi;

// a();

function Counter() {
    this.counts = 0;

    this.tick = function () {
        this.counts++;
    };
}

const myCounter = new Counter();

// const calc = new Calculator(10);

// calc.add(5); // 15
// calc.add(5); // 20
// calc.mult(3); // 60

// calc.set(100);
// calc.add(5); // 105
// calc.get();

// calc.base; // 105
