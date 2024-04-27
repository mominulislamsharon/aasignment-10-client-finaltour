import BannerSlider from "./BnnerSlider/BannerSlider";
import HomeCard from "./HomeCard/HomeCard";

const Home = () => {
    return (
        <div className="">
            <BannerSlider></BannerSlider>
            <div className="container mx-auto mt-24"><HomeCard></HomeCard></div>
        </div>
    );
};

export default Home;