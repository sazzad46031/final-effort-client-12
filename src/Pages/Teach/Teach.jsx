import { useContext } from "react";
import { AuthContext } from "../../Providers/Authprovider";
import axios from "axios";


const Teach = () => {
    const { user } = useContext(AuthContext)
    const handleRequest = event =>{
        event.preventDefault()
        const form = event.target
        const title = form.title.value
        const name = form.name.value
        const experience = form.experience.value 
        const category = form.category.value
        const image = form.image.value
        const newRequest = {title, name, image, experience, category}
        console.log(newRequest)
        axios.post('https://final-effort-server-dun.vercel.app/requests', newRequest)
        .then(res =>{
            console.log(res.data)
        })
    }
    return (
        <div className="bg-lime-200 max-w-screen-2xl mx-auto p-24">
            <h2 className="text-5xl text-purple-400 font-bold mb-8 text-center">Teacher request form</h2>
            <form onSubmit={handleRequest}>
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
                        <input type="text" placeholder="Name" name="name" className="input w-full input-bordered" />
                    </div>
                </div>
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input type="text" defaultValue={user?.photoURL} name="image" className="input w-full input-bordered" />
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Experience</span>
                        </label>
                        <select name="experience" id="experience">
                            <option value="Beginner">Beginner</option>
                            <option value="Experienced">Experienced</option>
                            <option value="Some-idea">Some-idea</option>
                            
                        </select>
                        
                    </div>
                </div>
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <select name="category" id="category">
                            <option value="Web-development">Web-development</option>
                            <option value="Graphics-design">Graphics-design</option>
                            <option value="Digital-marketing">Digital-marketing</option>
                            <option value="Seo">Seo</option>
                            <option value="Affiliate-marketing">Affiliate-marketing</option>
                        </select>
                    </div>
                    
                </div>
                <input type="submit" value="Submit for review" className="btn btn-block bg-purple-400" />
            </form>
        </div>
    );
};

export default Teach;