import { Link, useLoaderData } from "react-router-dom";




const AllClass = () => {
    const approveClasses = useLoaderData()
    const { title, name, image, price, description, _id } = approveClasses
    return (
        <>
            <div><h2 className="text-7xl mt-20 mb-20 text-center">Our Classes</h2></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    approveClasses.map(approveclass => <div key={approveclass._id} className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={approveclass?.image} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{approveclass?.title}</h2>
                            <h2>Name : {approveclass?.name}</h2>
                            <p>{approveclass?.description}</p>
                            <p>Price : {approveclass?.price}</p>
                            <p>Total enrolment : 30</p>
                            <Link to={`/classDetails/${approveclass._id}`}>
                                <div className="card-actions">
                                    <button className="btn btn-primary">Enroll</button>
                                </div>
                            </Link>
                        </div>
                    </div>)
                }
            </div>
        </>
    );
};

export default AllClass;