import { createRootRoute, Outlet } from "@tanstack/react-router";
import { NavBar } from "../components/NavBar";
import { NotFound } from "../pages/errors/NotFound";
import { Footer } from "../components/Footer";

export const Route = createRootRoute({
  component: () => (
    <html lang="en" className="text-white">
      <head>
        <title>ToDo App</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <div className="bg-[url(/src/assets/background.jpg)] h-full max-w-screen bg-cover">
          <NavBar />
          <Outlet />
          <Footer />
        </div>
      </body>
    </html>
  ),
  notFoundComponent: NotFound,
});
