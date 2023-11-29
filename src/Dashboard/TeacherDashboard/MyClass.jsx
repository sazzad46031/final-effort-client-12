import { useLoaderData } from "react-router-dom";
import ClassesDetails from "../../Components/ClassesDetails/ClassesDetails";


const MyClass = () => {
    const classes = useLoaderData()
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                classes.map(classs => <ClassesDetails key={classs._id} classs={classs}></ClassesDetails>)
            }
        </div>
    );
};

export default MyClass;