 // Section 1: Array Destructuring
const books=["fiction",["horror","literary"],"science"]; 
const [fiction,[horror,literary],science] =books
console.log(`${fiction} ${horror} ${literary} ${science}`)

 // Section 2: Object Destructuring

const Student = 
{
    firstName: "Joe", 
    university: "MIT", 
    studentInfo: 
    {
        studentid: 555,
    },
};

const{firstName,university,studentInfo:{studentid}} = Student
console.log(`Student : firstName : ${firstName}, University : ${university}, Studentid : ${studentid}`)