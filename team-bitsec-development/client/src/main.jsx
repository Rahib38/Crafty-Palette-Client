import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./Foundation/Root";
import { Toaster } from 'react-hot-toast';
import ErrorPage from "./Foundation/ErrorPage";
import Homepage from "./pages/HomePage/Homepage";
import {  HelmetProvider } from 'react-helmet-async';
import BitContext from "./context/BitContext";
import Register from "./pages/Authentication/Register";
import Login from "./pages/Authentication/Login";
import Bugs from "./pages/bugs/Bugs";
import Authentication from "./pages/Authentication/Authentication";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "reportBugs", 
        element: <Bugs />,
      },
    ],
  },
  {
    path: "auth", 
    element: <Authentication />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "register", 
        element: <Register />,
      },
      {
        path: "login", 
        element: <Login />,
      },
    ],
  },
]);


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>


    <BitContext>
    <Toaster
  position="top-right"
  reverseOrder={false}
/>
      <RouterProvider router={router} />
    </BitContext>
    </HelmetProvider>
  </StrictMode>
);
