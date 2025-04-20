import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AddExpense from "./pages/AddExpense";
import UpdateExpense from "./pages/UpdateExpense";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import "./style/global.css"; // Tailwind CSS import
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar /> {/* Navbar will only render when the user is logged in */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-expense" element={<AddExpense />} />
          <Route path="/update-expense/:id" element={<UpdateExpense />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
