import { useState } from "react";

export const Landing = () => {
  const [authenticated] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Welcome to the ToDo App!</h1>
      <p className="text-lg text-gray-600 mb-8">
        Organize your tasks and boost your productivity.
      </p>
      {authenticated ? (
        <a
          href="/todos"
          className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Get Started
        </a>
      ) : (
        <div className="space-x-4">
          <a
            href="/login"
            className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Login
          </a>
          <a
            href="/register"
            className="px-6 py-3 bg-gray-600 text-white rounded hover:bg-gray-700 transition"
          >
            Register
          </a>
        </div>
      )}
    </div>
  );
};
