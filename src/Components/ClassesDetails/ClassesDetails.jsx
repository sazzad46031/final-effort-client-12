import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";


const ClassesDetails = ({ classs }) => {
    const { _id, title, name, email, price, description, image } = classs
    const axiosSecure = UseAxiosSecure()
    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then(async(result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`classes/${_id}`)
                console.log(res.data)
            //   Swal.fire({
            //     title: "Deleted!",
            //     text: "Your file has been deleted.",
            //     icon: "success"
            //   });
            }
          });
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>{name}</p>
                <p>{email}</p>
                <p>${price}</p>
                <p>{description}</p>
                <p>Status : Pending</p>
                <div className="card-actions">
                    <Link to={`/dashboard/teacher/updateclass/${classs._id}`}><button className="btn btn-primary">Update</button></Link>
                    <button onClick={()=>handleDelete(_id)} className="btn btn-secondary">Delete</button>
                    <button className="btn btn-accent">See details</button>
                </div>
            </div>
        </div>
    );
};

export default ClassesDetails;