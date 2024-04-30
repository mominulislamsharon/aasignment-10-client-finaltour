import { NavLink, useLoaderData } from "react-router-dom";
import AllCard from "../AllCard/AllCard";

const AllCraftItems = () => {
    const product = useLoaderData()
    
    return (
        <div className="">
            <div className="text-white overflow-hidden  rounded-xl h-[500px] flex  bg-cover" style={{ backgroundImage: `url('../../../public/all.jpg')` }}>
            <div className="bg-[#171717] bg-opacity-70 w-full">
            <h1 className="text-4xl pl-52 pt-48 font-bold">According to your choice</h1>
            <p className="text-2xl text-[#a8741a] pl-52 pt-3">GThis highlights the element of personal preference and freedom in making purchases. It implies that you have the autonomy to select items that align with your preferences, tastes, and needs.</p>
            </div>
            </div>
            <div>
            <div className="text-center mt-24">
                <h1 className="text-3xl font-bold text-[#2d3448]">Our Collection</h1>
                <p className="font-medium pt-4 text-[#1dacf6]">Landscape painting depicts natural scenery, capturing beauty and mood. Artists portray landscapes with varying styles, from realism to impressionism, evoking emotions and connecting viewers to nature wonder.</p>
            </div>
            <div className="flex gap-6 container mx-auto">
            <div className="grid md:grid-cols-3 gap-3">
                {
                    product.map( i => <AllCard key={i._id} i={i}></AllCard>)
                }
                
               
            </div>
            <div className="mt-24">
                <h1>ADD My Art List</h1>
                <NavLink to='/addItem'><button className="bg-slate-400 p-2">Your Choice List</button></NavLink>
                
            </div>
            </div>
            </div>
        </div>
        // <div>
        //     <h1>price....</h1>
        //    <h1>{price}</h1>
        // </div>
        
    );
};

export default AllCraftItems;