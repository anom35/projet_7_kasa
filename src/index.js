import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Pages/Home"
import About from "./Pages/About"
import Logement from "./Pages/Logement"
import ErrorPage from "./Pages/ErrorPage"

import "./Styles/index.css"

const router = createBrowserRouter([
  { path:"/", element:<Home imageUrl="home" />, errorElement:<ErrorPage /> },
  { path: "/about", element: <About />, errorElement:<ErrorPage /> },
  { path: "/logement", element: <Logement />, errorElement:<ErrorPage /> },
  { element: <ErrorPage /> }  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
