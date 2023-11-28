import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AllClasses from "../Pages/AllClasses/AllClasses";
import Teach from "../Pages/Teach/Teach";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "allclass",
            element: <AllClasses></AllClasses>
        },
        {
            path: "teach",
            element: <Teach></Teach>
        },
        {
            path: "login",
            element: <Login></Login>
        },
        {
            path: "signup",
            element : <Signup></Signup>
        }
      ]
    },
]);