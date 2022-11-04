import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/main";
import AddProduct from "../pages/addProduct";
import Home from "../pages/home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/add",
        element: <AddProduct />,
      },
      {
        path: "/modify/:_id",
        element: <AddProduct modify={true} />,
      },
    ],
  },
]);
