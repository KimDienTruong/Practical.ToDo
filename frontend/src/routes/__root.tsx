import { createRootRoute, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <html lang="en">
      <head>
        <title>ToDo App</title>
      </head>
      <body>
        <Outlet />
      </body>
    </html>
  ),
  notFoundComponent: () => <div>Not found!</div>,
});
