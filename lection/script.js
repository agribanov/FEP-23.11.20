'use strict';

// Person.GENDER_MALE = 'male';
// Person.GENDER_FEMALE = 'female';

// Person.validate = function () {};

// function Person(name, surname) {
//     this._name = name;
//     this._surname = surname;
// }

// Person.prototype.sayHi = function () {
//     console.log(this._name + ' ' + this._surname);
// };

// Person.prototype.getFullName = function () {
//     return this._name + ' ' + this._surname;
// };

// Person.prototype.setFullName = function (fullName) {
//     const [name, surname] = fullName.split(' '); // ['']

//     this._name = name;
//     this._surname = surname;
//     // return this._name + ' ' + this._surname;
// };

// const adam = new Person('Adam', 'Smith');
// const eva = { name: 'eva' };

// function sayHi(greeting, age) {
//     console.log(greeting + ', ' + this.name + age);
//     return greeting + ', ' + this.name;
// }

// sayHi('привет');
// adam.sayHi = sayHi;

// const response = sayHi.call(adam, 'привет');
// const response = sayHi.apply(adam, ['привет', 22]);

// const bindedToAdam = sayHi.bind(adam, 'Привет', 33);
// const bindedToEva = sayHi.bind(eva);

// ООП

// 1) Наследование
// 2) Полиморфизм
// 3) Инкапсуляция

// function Animal() {}

// Animal.prototype.run = function () {
//     console.log('I am running fast');
// };

// function Dog(name) {
//     this.name = name;
// }

// Dog.prototype = new Animal(); //{}

// Dog.prototype.bark = function () {
//     console.log('BARK!!');
// };

// Dog.prototype.run = function () {
//     console.log('run like a dog');
// };

// function Cat() {}

// Cat.prototype = new Animal();

// const bob = new Dog('Bob');
// const kitty = new Cat();

// большой/средний/маленький

// const SIZE_BIG = {
//     price: 50,
//     callories: 200
// }

// {
//     price: 30,
//     callories: 100
// }

// {
//     price: 20,
//     callories: 75
// }

// const TOPPING_MAYO = {
//     price: 40,
//     callories: 200
// }

// const burger = new Hamburger(SIZE_BIG)
// const burger2 = new Hamburger(SIZE_BIG)
// const burger4 = new Hamburger(SIZE_BIG)

// burger.addToping(TOPPING_MAYO);
// burger.addToping(TOPPING_MAYO);
// burger.addToping(TOPPING_MAYO);
// burger.addToping(TOPPING_KETCHUP);
// burger.addToping(TOPPING_KETCHUP);
// burger.addToping(TOPPING_KETCHUP);
// burger.addToping(TOPPING_KETCHUP);

// burger.getPrice() // 250
// burger.getCallories() // 1050
