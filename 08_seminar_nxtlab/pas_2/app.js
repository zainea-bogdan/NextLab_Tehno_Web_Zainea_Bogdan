const express = require("express");
const Book = require("./Book");
const app = express();
const port = 3000;

const bookRouter = express.Router();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", bookRouter);

let books = [new Book(1, "Dune", "sf", "Frank Herbert"), new Book(2, "Robinson Crusoe", "adventure", "Daniel Defoe"), new Book(3, "Foundation", "sf", "Asimov")];

bookRouter
  .route("/books")
  //Step 1 - GET request
  .get((req, res) => {
    let filteredBooks = [];
    if (req.query.genre) {
      filteredBooks = books.filter((x) => x.genre === req.query.genre);
    } else {
      filteredBooks = books;
    }
    res.json(filteredBooks);
  });

app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

// //PAS 2
// bookRouter.route("/ordered_books").get((req, res) => {
//   let filteredBooks = [];
//   if (req.query.genre) {
//     filteredBooks = books.filter((x) => x.genre === req.query.genre);
//   } else {
//     filteredBooks = books.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
//   }

//   // let lista_carti_asc = [];
//   // for (let index = 0; index < filteredBooks.length; index++) {
//   //   lista_carti_asc.push(filteredBooks[index].name);
//   // }
//   // result = lista_carti_asc.sort();

//   res.json(filteredBooks);
// });

//Step 2 - POST request

// post request
bookRouter.route("/books").post((req, res) => {
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).json({ message: "body is missing" });
  }
  if (req.body.id === undefined || req.body.name === undefined || req.body.genre === undefined || req.body.author === undefined) {
    return res.status(400).json({ message: "malformed request" });
  }
  if (req.body.id <= 0 || typeof req.body.id !== "number") {
    return res.status(400).json({ message: "id should be a positive number" });
  }

  if (req.body.name === "" || req.body.name.trim().length === 0) {
    return res.status(400).json({ message: "name should not be empty" });
  }
  if (req.body.genre === "" || req.body.genre.trim().length === 0) {
    return res.status(400).json({ message: "genre should not be empty" });
  }
  if (req.body.author === "" || req.body.author.trim().length === 0) {
    return res.status(400).json({ message: "author should not be empty" });
  }

  let newBook = new Book(req.body.id, req.body.name, req.body.genre, req.body.author);
  books.push(newBook);
  console.log(books);
  return res.json(newBook);
});

//delete request
bookRouter.route("/books/:bookId").delete((req, res) => {
  let bookModif = books.find((e) => e.id === Number(req.params.bookId));
  books = books.filter((item) => item !== bookModif);
  return res.json(books);
});

app.listen(port, () => {
  console.log("Running on the port " + port);
});
