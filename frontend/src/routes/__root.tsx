import { createRootRoute, Outlet } from "@tanstack/react-router";
import { NavBar } from "../components/layouts/NavBar";
import { NotFound } from "../pages/errors/NotFound";
import { Footer } from "../components/layouts/Footer";

export const Route = createRootRoute({
  component: () => (
    <div className="bg-[url(/src/assets/background.jpg)] h-full max-h-full max-w-screen bg-cover">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  ),
  notFoundComponent: NotFound,
});
