class AnimalClass {
    SIZE_BIG = {
        price: 35,
    };

    constructor(name, surname) {
        this.#name = name;
        this.#surname = surname;
    }

    get fullName() {
        return this.#name + ' ' + this.#surname;
    }

    set fullName(value) {
        const [name, surname] = value.split(' ');
        if (name && surname) {
            this.#name = name;
            this.#surname = surname;
        }
    }

    run(speed) {
        console.log(this.name, ' is running');
    }
}

class DogClass extends AnimalClass {
    constructor(name) {
        super(name);
        this.size = 'small';
    }

    bark() {
        console.log('BARK!');
    }

    run() {
        this.bark();
        super.run();
    }
}

// ///

// function AnimalConstructor(name) {
//     this.name = name;
// }

// AnimalConstructor.prototype.run = function (speed) {
//     console.log(this.name, ' is running');
// };

// function DogConstructor(name) {
//     this.size = 'small';
//     AnimalConstructor.call(this, name);
// }

// DogConstructor.prototype = new AnimalConstructor();

// DogConstructor.prototype.run = function () {
//     this.bark();
//     AnimalConstructor.prototype.run.call(this);
// };

// DogConstructor.prototype.bark = function () {
//     console.log('BARK!');
// };

// 1) {}
// 2) DogConstructor -> {}
//     {size: 'small'}
// 3) AnimalConstructor -> {size: 'small'}
//     {size: 'small', name: 'gkgasdf'}

class Group {}

class Student {}

const feGroup = new Group();
const firstStudent = new Student('John Doe', [10, 102, 0]);

feGroup.addStudent(firstStudent);
feGroup.addStudent(new Student('awdead Doe', [10, 102, 0]));
feGroup.addStudent(new Student('tgrtgwrtg Doe', [10, 102, 0]));

feGroup.students; // [{},{},{}]
feGroup.students = 'Ypu are hacked';
feGroup.students; // [{},{},{}]

feGroup.getAverageMark(); // 20
