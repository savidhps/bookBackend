const Book = require("../models/bookModel");
const Review = require("../models/reviewModel");

exports.addBook = async (req, res) => {
  try {
    const { title, author, description, coverImage } = req.body;
    if (!title || !author || !description || !coverImage) {
      return res.status(400).json({ message: "All fields required" });
    }
    const book = await Book.create({
      title,
      author,
      descriptio,
      coverImage,
      user: req.user.id,
    });
    return res.status(201).json(book);
  } catch (err) {
    return res.status(500).json({ message: "Server error" });
  }
};

exports.getBooks = async (req, res) => {
  try {
    const books = await Book.find().sort({ createdAt: -1 });
    return res.json(books);
  } catch (err) {
    return res.status(500).json({ message: "Server error" });
  }
};

exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: "Book not found" });
    const reviews = await Review.find({ book: book._id }).populate("user", "name");
    return res.json({ book, reviews });
  } catch (err) {
    return res.status(500).json({ message: "Server error" });
  }
};

exports.addReview = async (req, res) => {
  try {
    const { rating, comment } = req.body;
    if (!rating || !comment) {
      return res.status(400).json({ message: "All fields required" });
    }
    const review = await Review.create({
      book: req.params.id,
      user: req.user.id,
      rating,
      comment,
    });
    return res.status(201).json(review);
  } catch (err) {
    return res.status(500).json({ message: "Server error" });
  }
};
