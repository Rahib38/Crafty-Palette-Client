import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root";
import Error from "./Components/Error";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Home from "./Components/Home";
import AuthProvider from "./Components/FirebaseProvider/AuthProvider";
import AddCraft from "./Components/AddCraft";
import CardDetails from "./Components/CardDetails";
import AllArtAndCraftsItem from "./Components/AllArtAndCraftsItem";
import PrivateRoute from "./Components/PrivateRoute";
import MyArtAndCraftList from "./Components/MyArtAndCraftList";
import UpdateCraft from "./Components/UpdateCraft";
import SubCategory from "./Components/SubCategory";
import SubDetails from "./Components/SubDetails";
import Category from "./Components/Category";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch("https://assignment10-server-mocha.vercel.app/crafty"),
      },
      {
        path: "/addcraft",
        element: (
          <PrivateRoute>
            <AddCraft />,
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/subcrafty",
        element: <SubCategory />,
        // loader: () => fetch(""),
      },
      {
        path: "/category/:subcategory_name",
        element: <Category />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/subcrafty//${params.subcategory_name}`),
      },
      {
        path: "/updateCraft/:id",
        element: <UpdateCraft />,
        loader: ({ params }) =>
          fetch(
            `https://assignment10-server-mocha.vercel.app/crafty//${params.id}`
          ),
      },
      {
        path: "/art&craft",
        element: (
          <PrivateRoute>
            <AllArtAndCraftsItem />,
          </PrivateRoute>
        ),
        loader: () =>
          fetch("https://assignment10-server-mocha.vercel.app/user"),
      },
      {
        path: "/myArt&Craft",
        element: (
          <PrivateRoute>
            <MyArtAndCraftList />,
          </PrivateRoute>
        ),
      },
      {
        path: "/cardDetails/:_id",
        element: (
          <PrivateRoute>
            <CardDetails />
          </PrivateRoute>
        ),
        loader: () =>
          fetch("https://assignment10-server-mocha.vercel.app/crafty"),
      },
      {
        path: "/subDetails/:_id",
        element: (
          <PrivateRoute>
            <SubDetails />
          </PrivateRoute>
        ),
        loader: () =>
          fetch("https://assignment10-server-mocha.vercel.app/subcrafty"),
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
