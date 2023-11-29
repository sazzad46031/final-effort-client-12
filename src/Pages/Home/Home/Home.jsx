import Banner from "../Banner/Banner";
import PopularClasses from "../Banner/PopularClasses/PopularClasses";
import Learn from "../Learn/Learn";
import Partner from "../Partner/Partner";
import Teacher from "../Teacher/Teacher";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Partner></Partner>
            <PopularClasses></PopularClasses>
            <Teacher></Teacher>
            <Learn></Learn>
        </div>
    );
};

export default Home;