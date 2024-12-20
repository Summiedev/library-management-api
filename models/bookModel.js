const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true, unique: true },
  author: { type: String, required: true },
  genre: {type: String},
  bookPages: { type: Number},
  copiesAvailable: { type: Number, required: true },
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
