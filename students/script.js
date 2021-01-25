class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }
}

class Group {
    _students = [];

    get students() {
        return this._students;
    }

    addStudent(student) {
        this._students.push(student);
    }

    getAverageMark() {
        const marks = this.students.flatMap((student) => student.marks);
        const sum = marks.reduce((sum, mark) => sum + mark);
        return sum / marks.length;
    }
}

const feGroup = new Group();
feGroup.addStudent(new Student('John Doe', [10, 10, 5, 10]));
feGroup.addStudent(new Student('Alex Smith', [10, 9, 8]));
feGroup.addStudent(new Student('Bob Johnson', [9, 10, 10, 8]));

console.log(feGroup.students); // [{},{},{}]

console.log(feGroup.getAverageMark()); // 20
