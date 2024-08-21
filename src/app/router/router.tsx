import { createBrowserRouter } from "react-router-dom";

import { Home } from "pages/Home";
import { Login } from "pages/Login";
import { NotFound } from "pages/NotFound";

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
  { path: "/login", element: <Login /> },
]);
