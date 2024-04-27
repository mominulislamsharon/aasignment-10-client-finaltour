import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import AddItem from "../Components/AddItem/AddItem";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
        },
        {
            path: '/addItem',
            element: <AddItem></AddItem>,
        },
      ]
    },
  ]);

  export default router;