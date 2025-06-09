//Q5


const Borrow = require('../models/Borrow');
const Book = require('../models/Book');
const Student = require('../models/Student');


const borrowBook = async (studentId, bookId) => {
    try {
       
        const student = await Student.findById(studentId);
        const book = await Book.findById(bookId);

        if (!student || !book) {
            throw new Error('Student or Book not found');
        }

       
        const unreturnedBooks = await Borrow.find({
            student: studentId,
            returned: false
        });

        if (unreturnedBooks.length >= 2) {
            throw new Error('Student has more than 2 unreturned books');
        }

        if (book.copiesAvailable <= 0) {
            throw new Error('No available copies for borrowing');
        }

        book.copiesAvailable -= 1;
        await book.save();

        const borrowRecord = new Borrow({
            student: studentId,
            book: bookId,
            borrowDate: Date.now(),
            returned: false
        });

        await borrowRecord.save();

        return 'Book borrowed successfully';
    } catch (error) {
        throw new Error(error.message);
    }
};


const returnBook = async (borrowId) => {
    try {
        const borrow = await Borrow.findById(borrowId);

        if (!borrow || borrow.returned) {
            throw new Error('Borrow record not found or already returned');
        }

      
        borrow.returned = true;
        borrow.returnDate = Date.now();
        await borrow.save();

      
        const book = await Book.findById(borrow.book);
        book.copiesAvailable += 1;
        await book.save();

        return 'Book returned successfully';
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = {
    borrowBook,
    returnBook
};

