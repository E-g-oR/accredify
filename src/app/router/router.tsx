import { createBrowserRouter } from "react-router-dom";
import { Layout } from "shared/ui/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  },
]);
