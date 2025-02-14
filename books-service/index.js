const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose.connect("mongodb://database:27017/bookstore", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const BookSchema = new mongoose.Schema({
    title: String,
    author: String,
});
const Book = mongoose.model("Book", BookSchema);

app.get("/books", async (req, res) => {
    const books = await Book.find();
    res.json(books);
});

app.post("/books", async (req, res) => {
    const book = new Book(req.body);
    await book.save();
    res.json(book);
});

app.listen(4001, () => console.log("Books Service running on port 4001"));
