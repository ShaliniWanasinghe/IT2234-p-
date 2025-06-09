
const Book = require('../models/Book');


const getAllBooks = async () => {
    try {
        return await Book.find();
    } catch (error) {
        throw new Error('Error fetching books');
    }
};

const getBookById = async (bookId) => {
    try {
        const book = await Book.findById(bookId);
        if (!book) {
            throw new Error('Book not found');
        }
        return book;
    } catch (error) {
        throw new Error('Error fetching book');
    }
};

//Q2
const getBooksByGenre = async (genre) => {
    try {
        return await Book.find({ genre });
    } catch (error) {
        throw new Error('Error filtering books by genre');
    }
};

module.exports = {
    getAllBooks,
    getBookById,
    getBooksByGenre
};
