import { useLoaderData } from "react-router-dom";


const TeacherRequest = () => {
    const requests = useLoaderData()
    console.log(requests)
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
                        <th>Name</th>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Experience</th>
                        <th>Status</th>
                        <th>Action</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {requests.map((request,index) => <tr key={request._id}>
                        <th>
                            {index + 1}
                        </th>
                        <td>
                            <div className="flex items-center gap-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={request?.image} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                
                            </div>
                        </td>
                        <td>
                            {request?.name}
                            
                        </td>
                        <td>{request?.title}</td>
                        <td>{request?.category}</td>
                        <td>{request?.experience}</td>
                        <td>Pending</td>
                        <th>
                            <button className="btn btn-ghost btn-xs">Approved</button>
                        </th>
                        <th>
                            <button className="btn btn-ghost btn-xs">Reject</button>
                        </th>
                    </tr>)}
                    
                  
                  
                   
                </tbody>
                

            </table>
        </div>
    );
};

export default TeacherRequest;