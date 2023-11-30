import { NavLink, Outlet } from "react-router-dom";


const StudentDashboard = () => {
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu p-4">
                    <li>
                        <NavLink to="/dashboard/student/myenrollclass">My enroll class</NavLink>
                    </li>
                    <li>
                        <NavLink to="profile">My profile</NavLink>
                    </li>
                    <hr></hr>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/allclass">All classes</NavLink>
                    </li>
                    <li>
                        <NavLink to="/teach">Teach on tutorio</NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default StudentDashboard;