'use strict';

function Calculator(base) {
    this.base = base;

    this.add = function (val) {
        return (this.base += val);
    };
    this.sub = function (val) {
        return (this.base -= val);
    };
    this.mult = function (val) {
        return (this.base *= val);
    };
    this.div = function (val) {
        return (this.base /= val);
    };
    this.set = function (val) {
        this.base = val;
    };
    this.get = function () {
        return this.base;
    };
}

const calc = new Calculator(10);

calc.add(5); // 15
calc.add(5); // 20
calc.mult(3); // 60

calc.set(100);
calc.add(5); // 105
calc.get();

calc.base; // 105
