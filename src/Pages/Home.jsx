
import { useLoaderData } from "react-router-dom";
import BannerSlider from "./BnnerSlider/BannerSlider";
import HomeCard from "./HomeCard/HomeCard";

const Home = () => {
    const items = useLoaderData()
    return (
        <div className="">
            <BannerSlider></BannerSlider>
            <div className="mt-24 text-center ">
                <h1 className="text-3xl font-bold">Our Collections</h1>
                <p className="text-lg pt-4">Bold strokes intertwine, capturing the essence of emotion. Colors dance across the canvas, telling stories untold. A symphony of hues, inviting the viewer into a world of imagination.</p>
            </div>
            <div className="grid mt-10 container mx-auto mb-8 md:grid-cols-3 space-y-4 ">
            {
                items.map(item => <HomeCard key={item._id} item1={item}></HomeCard>)
            }
            </div>
        </div>
    );
};

export default Home;