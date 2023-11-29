import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";

import Teach from "../Pages/Teach/Teach";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import AddClass from "../Dashboard/TeacherDashboard/AddClass";

import Users from "../Dashboard/AdminDashboard/Users";
import TeacherRequest from "../Dashboard/AdminDashboard/TeacherRequest";
import AdminDashboard from "../Dashboard/AdminDashboard/AdminDashboard";
import TeacherDashboard from "../Dashboard/TeacherDashboard/TeacherDashboard";
import StudentDashboard from "../Dashboard/StudentDashboard/StudentDashboard";
import MyEnrollClass from "../Dashboard/StudentDashboard/MyEnrollClass";
import PrivateRoute from "./PrivateRoute";
import Profile from "../Pages/Shared/Profile/Profile";
import MyClass from "../Dashboard/TeacherDashboard/MyClass";
import UpdateClass from "../Dashboard/TeacherDashboard/UpdateClass";
import AllClass from "../Pages/AllClasses/AllClass";
import AllClasses from "../Dashboard/AdminDashboard/AllClasses";



export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
            loader: ()=> fetch('http://localhost:5000/classes')
        },
        {
            path: "allclass",
            element: <AllClass></AllClass>
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
        },
        {
            path: "profile",
            element: <Profile></Profile>
        }
        
      ]
    },
    {
        path: "dashboard/admin",
        element: <PrivateRoute><AdminDashboard></AdminDashboard></PrivateRoute>,
        children: [
            
            {
                path: "users",
                element: <Users></Users>
            },
            {
                path: "requests",
                element: <TeacherRequest></TeacherRequest>,
                loader: ()=> fetch('http://localhost:5000/requests')
            },
            {
                path: "allclasses",
                element : <AllClasses></AllClasses>,
                loader: ()=> fetch('http://localhost:5000/classes')
            }
        ]
    },
    {
        path: "dashboard/teacher",
        element: <PrivateRoute><TeacherDashboard></TeacherDashboard></PrivateRoute>,
        children:[
            {
                path: "addclass",
                element: <AddClass></AddClass>
            },
            {
                path: "myclass",
                element: <MyClass></MyClass>,
                loader: ()=> fetch('http://localhost:5000/classes')
            },
            {
                path : "updateclass/:id",
                element: <UpdateClass></UpdateClass>,
                loader : ({params}) => fetch(`http://localhost:5000/classes/${params.id}`)
            },
            
        ]
    },
    {
        path: "dashboard/student",
        element: <PrivateRoute><StudentDashboard></StudentDashboard></PrivateRoute>,
        children: [
            {
                path: "myenrollclass",
                element: <MyEnrollClass></MyEnrollClass>
            },
           
        ]
    }
]);