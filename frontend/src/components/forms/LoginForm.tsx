import console from "console";


export const LoginForm = () => {
  const onClick = () => {
    console.log("Login button clicked");
  }

  return (
    <form className="bg-white p-6 rounded shadow-md w-full max-w-sm">
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="username"
        >
          Username
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Username"
        />
      </div>
      <div className="mb-2">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="********"
        />
      </div>
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
