const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware setup
app.use(cors());
app.use(bodyParser.json());

// Expense Schema
const expenseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  amount: { type: Number, required: true },
  date: { type: Date, required: true },
});

const Expense = mongoose.model('Expense', expenseSchema);

// Routes
app.get('/api/expenses', async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.json(expenses);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving expenses' });
  }
});

app.post('/api/expenses', async (req, res) => {
  const { title, amount, date } = req.body;

  const newExpense = new Expense({ title, amount, date });

  try {
    const savedExpense = await newExpense.save();
    res.status(201).json(savedExpense);
  } catch (error) {
    res.status(400).json({ message: 'Error adding expense' });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
