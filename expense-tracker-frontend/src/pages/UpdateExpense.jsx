// src/pages/UpdateExpense.jsx
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../services/api";

function UpdateExpense() {
  const { id } = useParams();
  const [expense, setExpense] = useState(null);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchExpense = async () => {
      const token = localStorage.getItem("token");

      try {
        const response = await api.get(`/expenses/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setExpense(response.data);
        setTitle(response.data.title);
        setAmount(response.data.amount);
        setDate(response.data.date);
      } catch (error) {
        console.error("Failed to fetch expense", error);
      }
    };

    fetchExpense();
  }, [id]);

  const handleUpdateExpense = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    try {
      const updatedExpense = { title, amount, date };
      await api.put(`/expenses/${id}`, updatedExpense, {
        headers: { Authorization: `Bearer ${token}` },
      });
      navigate("/dashboard"); // Redirect to dashboard after updating
    } catch (error) {
      console.error("Failed to update expense", error);
    }
  };

  if (!expense) return <div>Loading...</div>;

  return (
    <div className="update-expense-wrapper">
      <div className="update-expense-card">
        <h2 className="update-expense-heading">Update Expense</h2>
        <form onSubmit={handleUpdateExpense} className="update-expense-form">
          <div className="form-group">
            <label htmlFor="title" className="form-label">Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="amount" className="form-label">Amount</label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="date" className="form-label">Date</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="form-input"
              required
            />
          </div>
          <button
            type="submit"
            className="update-expense-button"
          >
            Update Expense
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateExpense;
