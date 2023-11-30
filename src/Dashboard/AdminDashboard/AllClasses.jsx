import { useLoaderData } from "react-router-dom";
import useAxiosPublic from "../../Hooks/UseAxiosPublic";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import Swal from "sweetalert2";


const AllClasses = () => {
    const classes = useLoaderData()
    console.log(classes)
    const axiosSecure = UseAxiosSecure()
    const handleApprove = (classs) =>{
        
        axiosSecure.put(`/approveClass/${classs._id}`)
        .then(res =>{
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${classs?.title} class is approved` ,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }
    const handleReject = (classs) => {
        axiosSecure.put(`/rejectClass/${classs._id}`)
        .then(res =>{
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${classs?.title} class is rejected` ,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            #
                        </th>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Email</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>Action</th>
                        <th>Action</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {classes.map((classs,index) => <tr key={classs._id}>
                        <th>
                            {index + 1}
                        </th>
                        <td>
                            <div className="flex items-center gap-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={classs?.image} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                               
                            </div>
                        </td>
                        <td>
                           {classs?.title}
                        </td>
                        <td>{classs?.email}</td>
                        <td>{classs?.description}</td>
                        <td>{classs?.status}</td>
                        <th>
                            <button onClick={()=>handleApprove(classs)} className="btn btn-ghost btn-xs">Approve</button>
                        </th>
                        <th>
                            <button onClick={()=>handleReject(classs)} className="btn btn-ghost btn-xs">Reject</button>
                        </th>
                        <th>
                            <button className="btn btn-ghost btn-xs disabled">See Progress</button>
                        </th>
                    </tr>)}
                    
                    
                   
                   
                </tbody>
               

            </table>
        </div>
    );
};

export default AllClasses;