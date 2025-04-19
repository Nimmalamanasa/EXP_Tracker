import { useForm } from "react-hook-form";

function Login() {
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    console.log("Login Data:", data);
    // axios.post('/login', data).then(...);
  };

  return (
    <div className="max-w-sm mx-auto mt-10 p-6 bg-white shadow rounded">
      <h2 className="text-2xl mb-4 text-center font-semibold">Login</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <input {...register("email")} type="email" placeholder="Email" className="border p-2 rounded" required />
        <input {...register("password")} type="password" placeholder="Password" className="border p-2 rounded" required />
        <button type="submit" className="bg-blue-600 text-white p-2 rounded">Login</button>
      </form>
    </div>
  );
}

export default Login;
