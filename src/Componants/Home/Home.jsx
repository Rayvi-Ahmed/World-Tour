import Features from "../../Pages/Features/Features";
import Header from "../../Pages/Header/Header";
import TourPlace from "../../Pages/tourPlace/TourPlace";
import Parallax from "./Parallax/Parallax";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Features></Features>
            <TourPlace></TourPlace>
            <Parallax></Parallax>
        </div>
    );
};

export default Home;