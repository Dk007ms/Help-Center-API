const express = require("express");
const { createCard, getAllCards, getCardByTitle } = require("../controllers/cardsController");

const router = express.Router();

router.post("/cards", createCard);
router.get("/getcards", getAllCards);
router.get("/cards/:title", getCardByTitle);

module.exports = router;
