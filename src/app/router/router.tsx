import { Home } from "pages/Home";
import { NotFound } from "pages/NotFound";
import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);
