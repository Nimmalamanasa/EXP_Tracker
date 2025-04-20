function ExpenseItem({ expense }) {
  return (
    <div className="expense-item">
      <div className="expense-item-content">
        <h3 className="expense-item-title">{expense.title}</h3>
        <p className="expense-item-date">{expense.date}</p>
      </div>
      <div className="expense-item-amount">{`$${expense.amount}`}</div>
    </div>
  );
}

export default ExpenseItem;
