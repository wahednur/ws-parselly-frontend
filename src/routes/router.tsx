import AboutPage from "@/pages/about/about";
import LoginPage from "@/pages/auth/Login";
import SignUpPage from "@/pages/auth/sign-up";
import ContactPage from "@/pages/contact-us/contact-us";
import HomePage from "@/pages/home/HomePage";
import TrackingPage from "@/pages/tracking/tracting";
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
      {
        path: "/about",
        Component: AboutPage,
      },
      {
        path: "/contact",
        Component: ContactPage,
      },
      {
        path: "/tracking",
        Component: TrackingPage,
      },
      {
        path: "/login",
        Component: LoginPage,
      },
      {
        path: "/register",
        Component: SignUpPage,
      },
    ],
  },
]);

export default router;
