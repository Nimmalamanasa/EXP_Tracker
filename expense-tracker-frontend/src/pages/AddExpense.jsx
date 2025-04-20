import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function AddExpense() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate();

  const handleAddExpense = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    try {
      await api.post(
        "/expenses",
        { title, amount, date },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      navigate("/dashboard");
    } catch (error) {
      console.error("Failed to add expense", error);
    }
  };

  return (
    <div className="add-expense-wrapper">
      <div className="add-expense-card">
        <h2 className="add-expense-heading">Add Expense</h2>
        <form onSubmit={handleAddExpense} className="add-expense-form">
          <div className="add-expense-group">
            <label htmlFor="title" className="add-expense-label">Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="add-expense-input"
              required
            />
          </div>

          <div className="add-expense-group">
            <label htmlFor="amount" className="add-expense-label">Amount</label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="add-expense-input"
              required
            />
          </div>

          <div className="add-expense-group">
            <label htmlFor="date" className="add-expense-label">Date</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="add-expense-input"
              required
            />
          </div>

          <button
            type="submit"
            className="add-expense-button"
          >
            Add Expense
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddExpense;
