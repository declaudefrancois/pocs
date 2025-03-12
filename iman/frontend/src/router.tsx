import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./page/layouts/MainLayout";
import HomePage from "./page/HomePage";
import SignupPage from "./page/SignupPage";
import SigninPage from "./page/SigninPage";

export const router = createBrowserRouter([
  {
    path: "",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
      {
        path: "/signin",
        element: <SigninPage />,
      },
    ],
  },
]);
