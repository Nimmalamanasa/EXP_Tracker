import { useState } from "react";
import api from "../services/api";

function ExpenseForm() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [error, setError] = useState(""); // New state for error handling

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Reset error message before submitting
    setError("");
    
    // Validate amount to be a positive number
    if (parseFloat(amount) <= 0) {
      setError("Amount must be a positive number.");
      return;
    }

    try {
      await api.post("/expenses", {
        title,
        amount: parseFloat(amount),
        date,
      });
      alert("Expense added successfully!");
      setTitle("");
      setAmount("");
      setDate("");
    } catch (error) {
      console.error("Error adding expense:", error);
      setError("Failed to add expense. Please try again later.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="expense-form">
      <h2 className="expense-form-title">Add New Expense</h2>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="expense-input"
        required
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="expense-input"
        required
      />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="expense-input"
        required
      />

      {error && <div className="error-message">{error}</div>}

      <button
        type="submit"
        className="expense-submit-button"
      >
        Add Expense
      </button>
    </form>
  );
}

export default ExpenseForm;
