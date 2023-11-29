import { useContext } from "react";
import { AuthContext } from "../../../Providers/Authprovider";
import useRole from "../../../Hooks/useRole";


const Profile = () => {
    const { user } = useContext(AuthContext)
    const [role] = useRole()
    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto pt-24">
            <figure><img src={user?.photoURL} alt="profile picture" /></figure>
            <div className="card-body">
                <h2 className="card-title">Name : {user?.displayName}</h2>
                <p>Role : {role}</p>
                <p>Email : {user?.email}</p>
                <p>Phone : 01305050509</p>
            </div>
        </div>
    );
};

export default Profile;