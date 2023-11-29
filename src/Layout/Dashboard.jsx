import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu p-4"> 
                    <li>
                        <NavLink to="/dashboard/addclass">Add class</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/users">Users</NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;
