import express from "express";
import cors from "cors";

// importing the JSON from the books.json
import booksData from "./data/books.json";

// Defines the port the app will run on. Defaults to 8080, but can be
const port = process.env.PORT || 8080;
const app = express();

// Add middlewares to enable cors and json body parsing
app.use(cors());
app.use(express.json());

// Start defining your routes here
app.get("/", (req, res) => {
  res.send("Hello world");
});

// gets all books
app.get("/books", (req, res) => {
  const { author } = req.query;

//   //get a list of books with specific authors
  let sortByAuthor = booksData;
  if (author) {
    sortByAuthor = sortByAuthor.filter((item) => item.authors.toLowerCase().includes(author.toLowerCase()));
  }
  res.json({
    response: sortByAuthor,
    success: true,
  });
});

//returns one book with the specified bookID-number
app.get("/books/:id", (req, res) => {
  const id = req.params.id;
  const myBook = booksData.find((item) => item.bookID == +id);
  //returns error message when there is no requested id
  if (!myBook) {
    res.status(404).send("No Book with that id");
  } else {
    res.json(myBook);
  }
});

// returns an array of books from a specified author
app.get("/authors/:author", (req, res) => {
  const author = req.params.author;
  const showAuthor = booksData.filter((item) => item.authors === author);
  res.json(showAuthor);
});

// returns one book with the specified ISBN-number
app.get("/isbn/:isbn", (req, res) => {
  const isbn = req.params.isbn;
  const myIsbn = booksData.filter((item) => item.isbn === +isbn);
  res.json(myIsbn);
});

// Start the server on 8080 local server
app.listen(port, () => {
  // eslint-disable-next-line
  console.log(`Server running on http://localhost:${port}`);
});
