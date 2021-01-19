'use strict';

function Calculator(base) {
    this.base = base;
}

Calculator.prototype.add = function (val) {
    return (this.base += val);
};
Calculator.prototype.sub = function (val) {
    return (this.base -= val);
};
Calculator.prototype.mult = function (val) {
    return (this.base *= val);
};
Calculator.prototype.div = function (val) {
    return (this.base /= val);
};
Calculator.prototype.set = function (val) {
    this.base = val;
};
Calculator.prototype.get = function () {
    return this.base;
};

const calc = new Calculator(10);

calc.add(5); // 15
calc.add(5); // 20
calc.mult(3); // 60

calc.set(100);
calc.add(5); // 105
calc.get();

calc.base; // 105
