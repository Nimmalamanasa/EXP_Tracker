const Expense = require('../models/Expense');

const getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.json(expenses);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving expenses' });
  }
};

const addExpense = async (req, res) => {
  const { title, amount, date } = req.body;
  const newExpense = new Expense({ title, amount, date });
  try {
    const savedExpense = await newExpense.save();
    res.status(201).json(savedExpense);
  } catch (error) {
    res.status(400).json({ message: 'Error adding expense' });
  }
};

module.exports = { getExpenses, addExpense };
