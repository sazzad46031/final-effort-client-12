import { Link } from "react-router-dom";


const Navbar = () => {
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
                </ul>
            <div className="flex-1 gap-2">
                
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <ul className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;