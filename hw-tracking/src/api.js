const STUDENTS_URL = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/students/';

const API = {
    getStudents: () => {
        return fetch(STUDENTS_URL).then((res) => res.json());
    },

    addStudent: (student) => {
        return fetch(STUDENTS_URL, {
            method: 'POST',
            body: JSON.stringify(student),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((res) => res.json());
    },

    updateStudent(student) {
        return fetch(STUDENTS_URL + student.id, {
            method: 'PUT',
            body: JSON.stringify(student),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((res) => res.json());
    },

    deleteStudent(id) {
        return fetch(STUDENTS_URL + id, {
            method: 'DELETE',
        }).then((res) => res.json());
    },
};
