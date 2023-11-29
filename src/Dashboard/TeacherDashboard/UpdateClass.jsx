import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/Authprovider";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import Swal from "sweetalert2";


const UpdateClass = () => {
    const classs = useLoaderData()
    const {title, price, description, image, _id } = classs
    const {user} = useContext(AuthContext)
    const axiosSecure = UseAxiosSecure()
    const handleUpdateClass = event =>{
        event.preventDefault()
        const form = event.target
        const title = form.title.value
        const name = form.name.value
        const email = form.email.value 
        const price = form.price.value
        const description = form.description.value
        const image = form.image.value
        const updateClass = {title, name, email, price, description, image}
        console.log(updateClass)
        axiosSecure.patch(`/updateclass/${_id}`, updateClass)
        .then(res =>{
            console.log(res.data)
            if(res.data.modifiedCount){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${classs?.title} is updated`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }
    return (
        <div className="bg-lime-200 max-w-screen-2xl mx-auto p-24">
            <h2 className="text-5xl text-purple-400 font-bold mb-8 text-center">Update Class</h2>
            <form onSubmit={handleUpdateClass}>
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <input type="text" defaultValue={title} placeholder="Title" name="title" className="input w-full input-bordered" />
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" defaultValue={user?.displayName} name="name" readOnly className="input w-full input-bordered" />
                    </div>
                </div>
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" defaultValue={user?.email} name="email" className="input w-full input-bordered" />
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="number" defaultValue={price} placeholder="Price" name="price" className="input w-full input-bordered" />
                    </div>
                </div>
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input type="text" defaultValue={description} placeholder="Description" name="description" className="input w-full input-bordered" />
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input type="text" defaultValue={image} placeholder="Image" name="image" className="input w-full input-bordered" />
                    </div>
                </div>
                <input type="submit" value="Update class" className="btn btn-block bg-purple-400" />
            </form>
        </div>
    );
};

export default UpdateClass;