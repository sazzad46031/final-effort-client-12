import { NavLink, Outlet } from "react-router-dom";


const AdminDashboard = () => {
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu p-4"> 
                    <li>
                        <NavLink to="/dashboard/admin/allclasses">All classes</NavLink>
                    </li>
                     <li>
                        <NavLink to="/dashboard/admin/users">Users</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/admin/requests">Teacher request</NavLink>
                    </li>
                    <li>
                        <NavLink to="/profile">My profile</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/teacher">Teacher Dashboard</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/student">Student Dashboard</NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default AdminDashboard;