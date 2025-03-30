// student.js
const students = [
    { regno: '2021/ICT/01', name: 'James', gender: 'Male', age: 21, course: 'IT' },
    { regno: '2021/ICT/02', name: 'Ravi', gender: 'Male', age: 22, course: 'IT' },
    { regno: '2021/ICT/03', name: 'Jaya', gender: 'Female', age: 21, course: 'IT' },
    { regno: '2021/ICT/05', name: 'Shani', gender: 'Female', age: 24, course: 'IT' },
    { regno: '2021/ICT/06', name: 'Evan', gender: 'Male', age: 20, course: 'IT' }
];

// Function to get student by registration number
const getStudentByRegNo = (regno) => {
    return students.find(student => student.regno === regno);
};

// Function to filter students by gender
const getStudentsByGender = (gender) => {
    return students.filter(student => 
        student.gender.toLowerCase() === gender.toLowerCase()
    );
};

// Export the data and functions
module.exports = {
    students,
    getStudentByRegNo,
    getStudentsByGender
};