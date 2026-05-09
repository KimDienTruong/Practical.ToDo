import FormInput from "./FormInput";

export const RegisterForm = () => {
  return (
    <form className="bg-white p-6 rounded shadow-md w-full max-w-sm">
      <FormInput
        label="Username"
        type="text"
        placeholder="Username"
        id="username"
      />
      <FormInput label="Email" type="email" placeholder="Email" id="email" />
      <FormInput
        label="Password"
        type="password"
        placeholder="********"
        id="password"
      />
      <FormInput
        label="Re-enter Password"
        type="password"
        placeholder="********"
        id="re-password"
      />
      <div className="flex items-center justify-center ">
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Register
        </button>
      </div>
    </form>
  );
};
