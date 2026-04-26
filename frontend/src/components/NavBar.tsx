import { useState } from "react";

export const NavBar = () => {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <nav className="bg-blue-600 text-white p-4 sticky top-0 z-10">
      <div className="container mx-auto flex flex-row items-center justify-between">
        <div className="text-2xl font-bold">
          <a
            href="/"
            className="px-3 py-2 rounded transition"
          >
            ToDo App
          </a>
        </div>

        {authenticated ? (
          <div>
            <a
              href="/"
              className="px-3 py-2 hover:bg-blue-700 rounded transition"
            >
              Home
            </a>
            <a
              href="/about"
              className="px-3 py-2 hover:bg-blue-700 rounded transition"
            >
              About
            </a>
            <a
              href="/contact"
              className="px-3 py-2 hover:bg-blue-700 rounded transition"
            >
              Contact
            </a>
          </div>
        ) : (
          <div>
            <a
              href="/login"
              className="px-3 py-2 hover:bg-blue-700 rounded transition"
            >
              Login
            </a>
            <a
              href="/register"
              className="px-3 py-2 hover:bg-blue-700 rounded transition"
            >
              Register
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};
