import FormInput from "./FormInput";


export const LoginForm = () => {
  const onClick = () => {
    console.log("Login button clicked");
  }

  return (
    <form className="bg-white p-6 rounded shadow-md w-full max-w-sm">
      <FormInput
        label="Username"
        type="text"
        placeholder="Username"
        id="username"
      />
      <FormInput
        label="Password"
        type="password"
        placeholder="********"
        id="password"
      />
      <div className="flex items-center justify-between mb-4">
        <a
          className="inline-block align-baseline font-bold text-sm text-blue-600 hover:text-blue-800"
          href="/register"
        >
          Don't have an account?
        </a>
      </div>
      <div className="flex flex-col items-center justify-between">
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={onClick}
        >
          Sign In
        </button>
      </div>
    </form>
  );
};
