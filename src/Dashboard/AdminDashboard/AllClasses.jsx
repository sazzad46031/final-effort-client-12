import { useLoaderData } from "react-router-dom";


const AllClasses = () => {
    const classes = useLoaderData()
    console.log(classes)
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
                        <th>
                            <button className="btn btn-ghost btn-xs">Approved</button>
                        </th>
                        <th>
                            <button className="btn btn-ghost btn-xs">Reject</button>
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