
# Library Management System API

This is a simple REST API for a library management system built using Node.js and Express.js. The API allows users to manage books in the library, including adding, borrowing, returning books, and viewing available books.

## Table of Contents

- [Installation](#installation)
- [Running the Application Locally](#running-the-application-locally)
- [API Endpoints](#api-endpoints)
  - [POST /api/books](#post-apibooks)
  - [PATCH /api/books/borrow/:title](#patch-apibooksborrowtitle)
  - [PATCH /api/books/return/:title](#patch-apibooksreturntitle)
  - [GET /api/books](#get-apibooks)
- [NOTES](#notes)
- [Technologies Used](#technologies-used)
- [License](#license)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/library-management-api.git
   cd library-management-api
   ```

2. **Install dependencies:**

   You need to install the required Node.js packages using npm.

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root of the project and add your MongoDB URI:

   ```
   MONGO_URI=mongodb://localhost:27017/library
   PORT=3000
   ```

   Adjust the `MONGO_URI` to point to your MongoDB instance (this can be a local or remote MongoDB instance).

## Running the Application Locally

To run the application locally, follow these steps:

1. **Start the server:**

   ```bash
   npm start
   ```

   By default, the API will be running at `http://localhost:3000`.

2. **Swagger Documentation:**

   If you want to view the API documentation, visit the following URL in your browser:

   ```
   http://localhost:3000/api-docs
   ```

## API Endpoints

### `POST /api/books`

**Description:** Add a new book to the library.

**Request body:**

```json
  {
    "title": "Americanah",
    "author": "Chimamanda Ngozi Adichie",
    "genre": "Fiction",
    "bookPages": 477,
    "copiesAvailable": 7
  },
```

**Response:**

```json
{
	"message": "Book added successfully!",
	"book": {
		"title": "Americanah",
		"author": "Chimamanda Ngozi Adichie",
		"genre": "Fiction",
		"bookPages": 477,
		"copiesAvailable": 7,
		"_id": "675d6e383208c577c0152dc5",
		"__v": 0
	}
}
```

---

### `PATCH /api/books/borrow/:title`

**Description:** Borrow a book by its title. This will decrease the available copies by 1.

**Example request (borrow a book):**

```http
PATCH /api/books/borrow/Americanah
```

**Response:**

```json
{
	"message": "Book borrowed successfully!",
	"book": {
		"_id": "675d5fa9351d73fd379b286f",
		"title": "Americanah",
		"author": "Chimamanda Ngozi Adichie",
		"genre": "Fiction",
		"bookPages": 477,
		"copiesAvailable": 6,
		"__v": 0
	}
}
```

---

### `PATCH /api/books/return/:title`

**Description:** Return a book by its title. This will increase the available copies by 1.

**Example request (return a book):**

```http
PATCH /api/books/return/Americanah
```

**Response:**

```json
{
	"message": "Book borrowed successfully!",
	"book": {
		"_id": "675d5fa9351d73fd379b286f",
		"title": "Americanah",
		"author": "Chimamanda Ngozi Adichie",
		"genre": "Fiction",
		"bookPages": 477,
		"copiesAvailable": 7,
		"__v": 0
	}
}
```

---

### `GET /api/books`

**Description:** Get a list of all books currently available in the library.

**Response:**

```json
[
	{
		"_id": "675d5e1b6f1299a25a52def7",
		"title": "Things Fall Apart",
		"author": "Chinua Achebe",
		"genre": "Fiction",
		"bookPages": 209,
		"copiesAvailable": 10,
		"__v": 0
	},
	{
		"_id": "675d5f90351d73fd379b286d",
		"title": "The Fishermen",
		"author": "Chigozie Obioma",
		"genre": "Fiction",
		"bookPages": 304,
		"copiesAvailable": 6,
		"__v": 0
	},
	{
		"_id": "675d5fa9351d73fd379b286f",
		"title": "Americanah",
		"author": "Chimamanda Ngozi Adichie",
		"genre": "Fiction",
		"bookPages": 477,
		"copiesAvailable": 6,
		"__v": 0
	},
]

```

---

## NOTES

- Ensure MongoDB is running: You need to have a MongoDB server running locally or use a cloud-based solution (like MongoDB Atlas).
- Testing: You can test the API using tools like Postman or Insomnia. Make sure to set the appropriate request headers, e.g., Content-Type: application/json for POST and PATCH requests.
- Used for `borrow` and `return` endpoints to update specific fields of an existing resource without replacing the entire object. This is more semantically correct than using `POST`, which is typically for creating new resources.

---

## Technologies Used

- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web framework for building APIs.
- **MongoDB**: NoSQL database for storing book data.
- **Mongoose**: MongoDB object modeling for Node.js.
- **Swagger UI**: For API documentation.
- **dotenv**: For managing environment variables.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---


