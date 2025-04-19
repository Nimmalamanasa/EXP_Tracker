function ExpenseItem({ expense }) {
    return (
      <div className="flex justify-between items-center p-4 mb-2 bg-gray-100 rounded shadow">
        <div>
          <h3 className="text-lg font-medium">{expense.title}</h3>
          <p className="text-gray-500">{expense.date}</p>
        </div>
        <div className="font-semibold text-green-600">${expense.amount}</div>
      </div>
    );
  }
  
  export default ExpenseItem;
  