import { NavLink } from "react-router-dom";

const AllCraftItems = () => {
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
                <h1 className="text-3xl font-bold text-[#2d3448]">Landscape Painting</h1>
                <p className="font-medium pt-4 text-[#1dacf6]">Landscape painting depicts natural scenery, capturing beauty and mood. Artists portray landscapes with varying styles, from realism to impressionism, evoking emotions and connecting viewers to nature wonder.</p>
            </div>
            <div className="flex gap-3 container mx-auto">
            <div className="grid md:grid-cols-3 gap-3">
                <div className="bg-[#dfe0e2] mt-16 rounded-md w-[400px] h-[550px]">
                    <img className=" rounded-md " src="https://img.freepik.com/premium-photo/watercolor-illustration-foggy-forest-mountains-white-background_646632-6518.jpg?w=1380" alt="" />
                    <div className="ml-6 mt-6">
                        <p className="bg-slate-400 w-[80px] rounded-lg p-2">In Stock</p>
                        <h1 className="text-2xl pt-4 font-bold">Mountain view canvas</h1>
                        <p className="font-medium pt-4">Rating: 4.5</p>
                        <p className="text-xl pt-4 font-bold">Price: 150$</p>
                        <button className="font-bold w-[300px] rounded-md bg-[#2b2b2b] mt-6 hover:bg-white hover:text-black duration-300 text-white p-2">Details</button>
                        
                    </div>
                </div>
                <div className=" bg-[#dfe0e2]  mt-16 rounded-md w-[400px] h-[550px]">
                    <img className=" rounded-md " src="https://img.freepik.com/premium-photo/watercolor-illustration-foggy-forest-mountains-white-background_646632-6518.jpg?w=1380" alt="" />
                    <div className="ml-6 mt-6">
                        <p className="bg-slate-400 w-[80px] rounded-lg p-2">In Stock</p>
                        <h1 className="text-2xl pt-4 font-bold">Mountain view canvas</h1>
                        <p className="font-medium pt-4">Rating: 4.5</p>
                        <p className="text-xl pt-4 font-bold">Price: 150$</p>
                        <button className="font-bold w-[300px] rounded-md bg-[#2b2b2b] mt-6 hover:bg-white hover:text-black duration-300 text-white p-2">Details</button>
                        
                    </div>
                </div>
                <div className="bg-[#dfe0e2] mt-16 rounded-md w-[400px] h-[550px]">
                    <img className=" rounded-md " src="https://img.freepik.com/premium-photo/watercolor-illustration-foggy-forest-mountains-white-background_646632-6518.jpg?w=1380" alt="" />
                    <div className="ml-6 mt-6">
                        <p className="bg-slate-400 w-[80px] rounded-lg p-2">In Stock</p>
                        <h1 className="text-2xl pt-4 font-bold">Mountain view canvas</h1>
                        <p className="font-medium pt-4">Rating: 4.5</p>
                        <p className="text-xl pt-4 font-bold">Price: 150$</p>
                        <button className="font-bold w-[300px] rounded-md bg-[#2b2b2b] mt-6 hover:bg-white hover:text-black duration-300 text-white p-2">Details</button>
                        
                    </div>
                </div>
                <div className="bg-[#dfe0e2] mt-16 rounded-md w-[400px] h-[550px]">
                    <img className=" rounded-md " src="https://img.freepik.com/premium-photo/watercolor-illustration-foggy-forest-mountains-white-background_646632-6518.jpg?w=1380" alt="" />
                    <div className="ml-6 mt-6">
                        <p className="bg-slate-400 w-[80px] rounded-lg p-2">In Stock</p>
                        <h1 className="text-2xl pt-4 font-bold">Mountain view canvas</h1>
                        <p className="font-medium pt-4">Rating: 4.5</p>
                        <p className="text-xl pt-4 font-bold">Price: 150$</p>
                        <button className="font-bold w-[300px] rounded-md bg-[#2b2b2b] mt-6 hover:bg-white hover:text-black duration-300 text-white p-2">Details</button>
                        
                    </div>
                </div>
            </div>
            <div>
                <h1>ADD My Art List</h1>
                <NavLink to='/artFormList'><button className="bg-red-500">My Art </button></NavLink>
                
            </div>
            </div>
            </div>
        </div>
    );
};

export default AllCraftItems;