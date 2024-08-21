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
import Details from "../Pages/AllCard/Details";
import Error from "../Components/Error";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Error></Error>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('https://art-and-craft-store-server-2vtkdu7a9-mominulislam2397s-projects.vercel.app/addItem')
        },
        {
            path: '/addItem',
            element: <PrivateRoute><AddItem></AddItem></PrivateRoute>,
        },
        {
          path: '/allArtCraft',
          element: <AllCraftItems></AllCraftItems>,
          loader: () => fetch('https://art-and-craft-store-server-2vtkdu7a9-mominulislam2397s-projects.vercel.app/addItem')
        },
        {
          path: '/myArtList',
          element: <PrivateRoute><MyArtList></MyArtList></PrivateRoute>
        },
        {
          path: '/update/:id',
          element: <PrivateRoute><Update></Update></PrivateRoute>
        }, 
        {
          path:"/details/:_id",
          element: <PrivateRoute><Details></Details></PrivateRoute>,
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