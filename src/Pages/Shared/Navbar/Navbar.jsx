import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/Authprovider";
import Swal from "sweetalert2";
import Avatar from "../../../Avatar/Avatar";
import useRole from "../../../Hooks/useRole";


const Navbar = () => {
    const {user, logOut}= useContext(AuthContext)
    const [role] = useRole()
    console.log(role)
    const handleLogout = () =>{
        logOut()
        .then(()=>{
            console.log('logout')
            Swal.fire({
                title: "User logout successfully",
                showClass: {
                  popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `
                },
                hideClass: {
                  popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `
                }
              });
        })
        .catch(error => {
            console.log(error)
        })
    }
    return (
        <div className="navbar bg-sky-400">
            <div className="flex-1 gap-4">
                <img className="bg-white" src="./logo.png" alt="" />
                <p className="text-3xl">Tutorio</p>
            </div>
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/allclass">All classes</Link></li>
                    <li><Link to="/teach">Teach on tutorio</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            <div className="flex-1 gap-2">
                
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="avatar" src={user?.photoURL} />
                        </div>
                    </div>
                    <ul className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li className="pl-4">
                            {user && user.displayName}
                        </li>
                        <li>
                            {role === 'admin' && <Link to="/dashboard/admin">Dashboard</Link>}
                            {role === 'teacher' && <Link to="/dashboard/teacher">Dashboard</Link>}
                            {role === 'student' && <Link to="/dashboard/student">Dashboard</Link>}
                            {role === null && <Link to="/dashboard/student">Dashboard</Link>}
                        </li>
                        <li><button onClick={handleLogout}>Logout</button></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;