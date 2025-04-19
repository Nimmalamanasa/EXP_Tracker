import ExpenseItem from '../components/ExpenseItem';

const dummyExpenses = [
  { id: 1, title: "Groceries", amount: 50, date: "2025-04-19" },
  { id: 2, title: "Electricity Bill", amount: 120, date: "2025-04-18" },
];

function Expenses() {
  return (
    <div className="max-w-2xl mx-auto mt-10">
      <h1 className="text-3xl font-semibold mb-4">Your Expenses</h1>
      {dummyExpenses.map(exp => (
        <ExpenseItem key={exp.id} expense={exp} />
      ))}
    </div>
  );
}

export default Expenses;
