const express = require('express');
const router = express.Router();
const Daily = require('../models/Daily');

// GET all
router.get('/', async (req, res) => {
  try {
    const entries = await Daily.find().sort({ date: -1 });
    res.json(entries);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST new
router.post('/', async (req, res) => {
  const { quote, reflection } = req.body;
  const newEntry = new Daily({ quote, reflection });

  try {
    const savedEntry = await newEntry.save();
    res.status(201).json(savedEntry);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
