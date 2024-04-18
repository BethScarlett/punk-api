import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./pages/ErrorPage.tsx";
import CardContent from "./containers/CardContent.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true, //Ensures there is a match on the parent path
        element: <Navigate to="/cardlist" replace />, //Handles redirect
      },
      {
        path: "/cardlist",
        element: <CardContent />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
