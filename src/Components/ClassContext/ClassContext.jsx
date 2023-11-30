import { Link, useLoaderData } from "react-router-dom";


const ClassContext = () => {
    const classes = useLoaderData()
    const { title, name, image, price, description, _id } = classes
    return (
        <>
            <div>
                <h2 className="text-7xl text-center mt-20 mb-20">Available classes</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    classes.map(classs => <div key={classs._id} className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={classs?.image} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{classs?.title}</h2>
                            <p>Teachers name : {classs?.name}</p>
                            <p>Price : ${classs?.price}</p>
                            <Link to="/dashboard/student/payment">
                                <div className="card-actions">
                                    <button className="btn btn-primary">Pay</button>
                                </div>
                            </Link>
                        </div>
                    </div>)
                }
            </div>
        </>
    );
};

export default ClassContext;