export default class User {
    constructor(name, email, birthDate, role, active = true, courseList, registeredCourses) {
        this.name = name
        this.email = email
        this.birthDay = birthDate
        this.role = role || "Student"
        this.active = active
        this.courseList = courseList
        this.courseList = ["C", "Python", "JavaSscript."]
        this.registeredCourses = registeredCourses
        this.registeredCourses = []
    }

    createProfile(){
        return `${this.name}, profile created!`
    }

    deleteProfile(){
        this.name = null;
        this.email = null;
        this.birthDay = null;
        this.role = null;
        this.active = false;
        this.registeredCourses = [];
        return `Profile deleted successfully!`;
    }
    
    showInfo(){
        return `Nome: ${this.name}\n Email: ${this.email}\n BirthDate: ${this.birthDay}\n Role:${this.role} \n Status: ${this.active}`
    }

    showCourseList(){
        return `Course list: ${this.courseList}`
    }

    registerInCourse(courseName){
        this.registeredCourses.push(courseName)
        return `${this.name} has been registered in the course: ${courseName}`;
    }

    showRegisteredCourses(){
        return `Registered Courses: ${this.registeredCourses}`
    }
}

const newUser = new User("Gabriel Pizol", "ga@ga.com", "05/09/2003")
console.log(newUser);

console.log(newUser.createProfile());
console.log(newUser.showInfo());

console.log(newUser.showRegisteredCourses());
console.log(newUser.showCourseList());

console.log(newUser.registerInCourse("C++"));
console.log(newUser);

console.log(newUser.deleteProfile());

console.log(newUser);

console.log(newUser.courseList);

