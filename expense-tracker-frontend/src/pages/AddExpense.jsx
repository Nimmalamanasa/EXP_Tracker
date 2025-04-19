import { useForm } from "react-hook-form";

function AddExpense() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = data => {
    console.log("New Expense:", data);
    // You can call your backend here with axios
    reset();
  };

  return (
    <div className="max-w-sm mx-auto mt-10 p-6 bg-white shadow rounded">
      <h2 className="text-2xl mb-4 text-center font-semibold">Add Expense</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <input {...register("title")} type="text" placeholder="Expense Title" className="border p-2 rounded" required />
        <input {...register("amount")} type="number" placeholder="Amount" className="border p-2 rounded" required />
        <input {...register("date")} type="date" className="border p-2 rounded" required />
        <button type="submit" className="bg-green-600 text-white p-2 rounded">Add Expense</button>
      </form>
    </div>
  );
}

export default AddExpense;
