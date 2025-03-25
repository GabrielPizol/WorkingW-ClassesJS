import User from "./User.js/"

class Admin extends User {
    constructor(name, email, birthDay, role = "Admin", active = true, courseList) {
        super(name, email, birthDay, role, active, courseList)
    }

    createCourse(newCourse){
        this.courseList.push(newCourse);
        return `${newCourse} course created!`
    }

    deleteCourse(deletingCourse){
        const courseIndex = this.courseList.findIndex((course) => course === deletingCourse)
            if (courseIndex !== -1) {
                this.courseList.splice(courseIndex, 1);
                return `${deletingCourse} course deleted successfully!`;
            } else {
                return `Course "${deletingCourse}" not found!`;
            }
    }

    deactivateProfile(){
        this.active = false;
        return `Profile "${this.name}", deactivated!`
    }
}


const newAdmin = new Admin("Rhuan Felix", "rhu@rhu.com", "12/03/1995", "Admin");
console.log(newAdmin.createProfile());
console.log(newAdmin);

console.log(newAdmin.createCourse("C++"));
console.log(newAdmin.courseList);

console.log(newAdmin.deleteCourse("Python"));
console.log(newAdmin.courseList)

console.log(newAdmin.deactivateProfile());
console.log(newAdmin);
