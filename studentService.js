const Student = require('../models/Student');


const getAllStudents = async () => {
    try {
        return await Student.find();
    } catch (error) {
        throw new Error('Error fetching students');
    }
};


const getStudentById = async (studentId) => {
    try {
        const student = await Student.findById(studentId);
        if (!student) {
            throw new Error('Student not found');
        }
        return student;
    } catch (error) {
        throw new Error('Error fetching student');
    }
};

//Q3
const getStudentsByYear = async (year) => {
    try {
        return await Student.find({ year });
    } catch (error) {
        throw new Error('Error filtering students by year');
    }
};

module.exports = {
    getAllStudents,
    getStudentById,
    getStudentsByYear
};
