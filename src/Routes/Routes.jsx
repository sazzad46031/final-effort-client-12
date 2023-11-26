import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AllClasses from "../Pages/AllClasses/AllClasses";
import Teach from "../Pages/Teach/Teach";


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
        }
      ]
    },
]);