import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between items-center">
      <h1 className="text-xl font-bold">Expense Tracker</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Dashboard</Link>
        <Link to="/expenses" className="hover:underline">Expenses</Link>
        <Link to="/login" className="hover:underline">Login</Link>
        <Link to="/add-expense" className="hover:underline">Add Expense</Link>
        <Link to="/register" className="hover:underline">Register</Link>
      </div>
    </nav>
  );
}

export default Navbar;

