const express = require("express");
const { addBook, getBooks, getBookById, addReview } = require("../controllers/bookController");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/", protect, addBook);
router.get("/", getBooks);
router.get("/:id", getBookById);
router.post("/:id/reviews", protect, addReview);

module.exports = router;
