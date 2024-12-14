const Book = require('../models/bookModel');


// Add a book
const addBook = async (req, res) => {
  try {
    const { title, author, genre, bookPages, copiesAvailable } = req.body;

    const newBook = new Book({ title, author, genre, bookPages, copiesAvailable });
    await newBook.save();
    res.status(201).json({ message: 'Book added successfully!', book: newBook });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// Borrow a book
const borrowBook = async (req, res) => {
  try {
    const { title } = req.params;

    const book = await Book.findOne({ title });
    if (!book) {
        return res.status(404).json({ message: 'Book not found' });
      }
  
      if (book.copiesAvailable <= 0) {
        return res.status(400).json({ message: 'No copies available to borrow' });
      }
    book.copiesAvailable -= 1;
    await book.save();
    res.status(200).json({ message: 'Book borrowed successfully!', book });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// Return a book
const returnBook = async (req, res) => {
  try {
    const { title } = req.params;

    const book = await Book.findOne({ title });
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }

    book.copiesAvailable += 1;

    await book.save();
    res.status(200).json({ message: 'Book returned successfully!', book });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// View all available books
const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find({ copiesAvailable: { $gt: 0 } });
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { addBook, borrowBook, returnBook, getAllBooks };
