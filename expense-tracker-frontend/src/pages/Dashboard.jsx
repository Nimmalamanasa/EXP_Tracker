// src/pages/Dashboard.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

function Dashboard() {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExpenses = async () => {
      const token = localStorage.getItem("token");

      try {
        const response = await api.get("/expenses", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setExpenses(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch expenses", error);
      }
    };

    fetchExpenses();
  }, []);

  const handleDeleteExpense = async (id) => {
    const token = localStorage.getItem("token");

    try {
      await api.delete(`/expenses/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setExpenses(expenses.filter((expense) => expense._id !== id));
    } catch (error) {
      console.error("Failed to delete expense", error);
    }
  };

  return (
    <div className="dashboard-wrapper">
      <h2 className="dashboard-heading">Dashboard</h2>
      <div className="dashboard-add-btn-container">
        <Link to="/add-expense" className="dashboard-add-btn">
          Add New Expense
        </Link>
      </div>

      {loading ? (
        <div className="dashboard-loading">Loading...</div>
      ) : (
        <div className="dashboard-expense-list">
          {expenses.length === 0 ? (
            <p className="dashboard-no-expense">No expenses added yet.</p>
          ) : (
            expenses.map((expense) => (
              <div key={expense._id} className="dashboard-expense-card">
                <h3 className="dashboard-expense-title">{expense.title}</h3>
                <p className="dashboard-expense-amount">Amount: ${expense.amount}</p>
                <p className="dashboard-expense-date">Date: {new Date(expense.date).toLocaleDateString()}</p>
                <div className="dashboard-expense-actions">
                  <Link
                    to={`/update-expense/${expense._id}`}
                    className="dashboard-edit-btn"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDeleteExpense(expense._id)}
                    className="dashboard-delete-btn"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default Dashboard;
