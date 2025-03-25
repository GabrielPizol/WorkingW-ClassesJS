import User from "./User.js/"

class Teacher extends User {
    constructor(name, email, birthDay, role = "Teacher", active = true, student, courseList) {
        super(name, email, birthDay, role, active, )
        this.student = student
    }

    approveStudent(studentN){
        const studentNam = studentN
        this.student = studentN        
        return `Student ${studentNam} approved`
    }

    disapproveStudent(studentN){
        const studentNam = studentN
        this.student = studentN
        return `Student ${studentNam} disapproved`
    }
}

const newTeacher = new Teacher("Maria", "ma@ma.com", "19/02/1993", "Teacher");
console.log(newTeacher.createProfile());
console.log(newTeacher)

console.log(newTeacher.approveStudent("Maria Fernanda"));
console.log(newTeacher)

console.log(newTeacher.disapproveStudent("Maria Fernanda"));
console.log(newTeacher);

