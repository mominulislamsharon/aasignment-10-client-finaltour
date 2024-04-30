import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import AddItem from "../Components/AddItem/AddItem";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import PrivateRoute from "./PrivateRoute";
import AllCraftItems from "../Pages/AllCraftItems/AllCraftItems";
import MyArtList from "../Pages/MyArtList/MyArtList";
import Update from "../Pages/Update/Update";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('http://localhost:5000/addItem')
        },
        {
            path: '/addItem',
            element: <PrivateRoute><AddItem></AddItem></PrivateRoute>,
        },
        {
          path: '/allArtCraft',
          element: <AllCraftItems></AllCraftItems>,
        },
        {
          path: '/myArtList',
          element: <MyArtList></MyArtList>
        },
        {
          path: '/update/:id',
          element: <Update></Update>
        }, 
        {
          path: '/login',
          element: <Login></Login>,
        },
        {
          path: '/register',
          element: <Register></Register>
        }
      ]
    },
  ]);

  export default router;