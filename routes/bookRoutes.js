const express = require('express');
const router = express.Router();
const { addBook, borrowBook, returnBook, getAllBooks } = require('../controllers/bookController');

/**
 * @swagger
 * /api/books:
 *   post:
 *     summary: Add a new book to the library
 *     description: Adds a new book with title, author, genre, book pages, and available copies.
 *     parameters:
 *       - in: body
 *         name: book
 *         description: The book to add
 *         required: true
 *         schema:
 *            type: object
 *            properties:
 *             title:
 *               type: string
 *               description: The title of the book
 *               example: "Americanah"
 *               # Marked as required in the body schema
 *               required: true
 *             author:
 *               type: string
 *               description: The author of the book
 *               example: "Chimamanda Ngozi Adichie"
 *               # Marked as required in the body schema
 *               required: true
 *             genre:
 *               type: string
 *               description: The genre of the book
 *               example: "Fiction"
 *               required: false
 *             bookPages:
 *               type: integer
 *               description: The number of pages in the book
 *               example: 477
 *               required: false
 *             copiesAvailable:
 *               type: integer
 *               description: The number of copies available in the library
 *               example: 7
 *               # Marked as required in the body schema
 *               required: true
 *     responses:
 *       201:
 *         description: Successfully added the book
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 title:
 *                   type: string
 *                   example: "The Art of Procrastination"
 *                 author:
 *                   type: string
 *                   example: "Sumayyah Apatira"
 *                 genre:
 *                   type: string
 *                   example: "Non-Fiction"
 *                 bookPages:
 *                   type: integer
 *                   example: 180
 *                 copiesAvailable:
 *                   type: integer
 *                   example: 5
 *       400:
 *         description: Bad request, missing or invalid data
 *       500:
 *         description: Internal Server Error
 */

router.post('/books', addBook);


/**
 * @swagger
 * /api/books/borrow/{title}:
 *   patch:
 *     description: Borrow a book by its title
 *     parameters:
 *       - name: title
 *         in: path
 *         description: Title of the book to borrow
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successfully borrowed the book
 *       404:
 *         description: Book not found
 *       400:
 *         description: No copies available
 */
router.patch('/books/borrow/:title', borrowBook);


/**
 * @swagger
 * /api/books/return/{title}:
 *   patch:
 *     description: Return a borrowed book by its title
 *     parameters:
 *       - name: title
 *         in: path
 *         description: Title of the book to return
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successfully returned the book
 *       404:
 *         description: Book not found
 */

router.patch('/books/return/:title', returnBook);


/**
 * @swagger
 * /api/books:
 *   get:
 *     description: Get all books available in the library
 *     responses:
 *       200:
 *         description: Successfully fetched the books
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   title:
 *                     type: string
 *                   author:
 *                     type: string
 *                   genre:
 *                     type: string
 *                   bookPages:
 *                     type: integer
 *                   copiesAvailable:
 *                     type: integer
 */
router.get('/books', getAllBooks);

module.exports = router;
