import { useContext } from "react";
import { AuthContext } from "../../Providers/Authprovider";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const AddClass = () => {
    const {user} = useContext(AuthContext)
    const navigate = useNavigate()
    const handleAddClass = event =>{
        event.preventDefault()
        const form = event.target
        const title = form.title.value
        const name = form.name.value
        const email = form.email.value 
        const price = form.price.value
        const description = form.description.value
        const image = form.image.value
        const newClass = {title, name, email, price, description, image}
        console.log(newClass)
        axios.post('https://final-effort-server-dun.vercel.app/classes', newClass)
        .then(res =>{
            console.log(res.data)
            navigate('/dashboard/teacher/myclass')
        })
    }
    return (
        <div className="bg-lime-200 max-w-screen-2xl mx-auto p-24">
            <h2 className="text-5xl text-purple-400 font-bold mb-8 text-center">Add Class</h2>
            <form onSubmit={handleAddClass}>
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <input type="text" placeholder="Title" name="title" className="input w-full input-bordered" />
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
                        <input type="number" placeholder="Price" name="price" className="input w-full input-bordered" />
                    </div>
                </div>
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input type="text" placeholder="Description" name="description" className="input w-full input-bordered" />
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input type="text" placeholder="Image" name="image" className="input w-full input-bordered" />
                    </div>
                </div>
                <input type="submit" value="Add class" className="btn btn-block bg-purple-400" />
            </form>
        </div>
    );
};

export default AddClass;