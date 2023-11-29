import { useLoaderData } from "react-router-dom";
import ClassView from "./ClassView";


const PopularClasses = () => {
    const classes = useLoaderData()
    console.log(classes)
    return (
        <div>
            <div><h2 className="text-8xl font-bold text-center mt-20 mb-20">Popular classes</h2></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    classes.slice(0, 6).map(classs => <ClassView key={classs._id} classs={classs}></ClassView>)
                }
            </div>
        </div>
    );
};

export default PopularClasses;