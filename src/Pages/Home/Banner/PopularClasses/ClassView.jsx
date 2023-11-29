

const ClassView = ({ classs }) => {
    const { image, title, name, price, email } = classs
    return (
       

            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{title}</h2>
                    <p>Name : {name}</p>
                    <p>Price : ${price}</p>
                    <p>Email : {email}</p>

                </div>
            </div>
       
    );
};

export default ClassView;