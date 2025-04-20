const express = require('express');
const Expense = require('../models/Expense');
const { getExpenses, addExpense } = require('../controllers/expenseController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

// Get logged-in user's expenses
router.get('/', protect, async (req, res) => {
  try {
    const expenses = await Expense.find({ user: req.user._id });
    res.json(expenses);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving expenses' });
  }
});

// Add new expense for logged-in user
router.post('/', protect, async (req, res) => {
  const { title, amount, date } = req.body;

  try {
    const newExpense = new Expense({
      user: req.user._id,
      title,
      amount,
      date
    });

    const savedExpense = await newExpense.save();
    res.status(201).json(savedExpense);
  } catch (error) {
    res.status(400).json({ message: 'Error adding expense' });
  }
});

module.exports = router;
