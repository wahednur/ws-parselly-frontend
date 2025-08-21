import HomePage from "@/pages/home/HomePage";
import { createBrowserRouter } from "react-router";
import RootLayout from "./../layouts/RootLayout";
import ErrorPage from "./../pages/error/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        Component: HomePage,
      },
    ],
  },
]);

export default router;
