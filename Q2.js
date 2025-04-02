
const { Student } = require('./Data.js');
const students = require('./Data.js');

function getUniqueLanguages(students) {
    let languageSet = new Set();
    students.forEach(student => {
        // Standardize "JS" to "JavaScript" before adding to set
        student.Pro_languages.forEach(lang => {
            const standardizedLang = lang === 'JS' ? 'JavaScript' : lang;
            languageSet.add(standardizedLang);
        });
    });

    return Array.from(languageSet).sort();
}

console.log(getUniqueLanguages(students));
