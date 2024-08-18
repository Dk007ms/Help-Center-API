const Card = require("../models/cards");
const{v4: uuidv4}=require("uuid");

// Create a new card
const createCard = async (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return res
      .status(400)
      .json({ message: "Title and description are required" });
  }

  try {
    const card = new Card({
      id: uuidv4(),
      title,
      description,
    });
    await card.save();
    res.status(201).json(card);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error creating card", error: err.message });
  }
};

// Get all cards
const getAllCards = async (req, res) => {
  try {
    const cards = await Card.find();
    res.status(200).json(cards);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching cards", error: err.message });
  }
};

// Get a specific card by title
const getCardByTitle = async (req, res) => {
  const { title } = req.params;

  try {
    const card = await Card.findOne({ title });
    if (!card) {
      return res.status(404).json({ message: "Card not found" });
    }
    res.status(200).json(card);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching card", error: err.message });
  }
};

module.exports = {
  createCard,
  getAllCards,
  getCardByTitle,
};
