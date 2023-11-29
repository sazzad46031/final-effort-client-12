import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../Providers/Authprovider";
import Swal from "sweetalert2";


const Users = () => {
   
    const axiosSecure = UseAxiosSecure()
    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data
            
        }
    })
    
    const handleMakeAdmin = user => {
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res => {
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.name} is an admin now`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user =>  <tr key={user._id}>
                            
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={user?.image} />
                                        </div>
                                    </div>
                                    
                                </div>
                            </td>
                            <td>
                                {user?.name}    
                            </td>
                            <td>{user?.email}</td>
                            <th>
                                {user.role === 'admin' ? 'Admin' : <button onClick={()=>handleMakeAdmin(user)} className="btn btn-ghost btn-xs">Make admin</button>}
                            </th>
                        </tr>)}
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;