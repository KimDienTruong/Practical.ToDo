import { RouterProvider, type RegisteredRouter } from "@tanstack/react-router";

type AppProps = {
  router: RegisteredRouter;
};

const App = ({ router }: Readonly<AppProps>) => {
  return <RouterProvider router={router} />;
};

export default App;
