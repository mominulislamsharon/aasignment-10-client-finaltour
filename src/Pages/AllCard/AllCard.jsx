import { Link,  useNavigate} from "react-router-dom";


const AllCard = ({i}) => {
    const  {name,  price, rating, time, item, category, customization, stock, photo,  message}  = i|| {};
    const navigate = useNavigate();
    const handleDetails = () => {
        if (i._id) {
            const path = `/details/${i._id}`;
            navigate(path);
          }
    }
    return (
        <div className="bg-[#dfe0e2] mt-16 rounded-md w-[400px] h-[550px]">
                    <img className=" rounded-md " src="https://img.freepik.com/premium-photo/watercolor-illustration-foggy-forest-mountains-white-background_646632-6518.jpg?w=1380" alt="" />
                    <div className="ml-6 mt-6">
                        <p className="bg-slate-400 w-[80px] rounded-lg p-2">{stock}</p>
                        <h1 className="text-2xl pt-4 font-bold">{item}</h1>
                        <p className="font-medium pt-4">Rating: {rating}</p>
                        <p className="text-xl pt-4 font-bold">Price:{price}$</p>
                        <Link to={`/details/${i._id}`}>
                        <button onClick={handleDetails} className="font-bold w-[300px] rounded-md bg-[#2b2b2b] mt-6 hover:bg-white hover:text-black duration-300 text-white p-2">Details</button>
                        </Link>
                    </div>
                </div>
    );
};

export default AllCard;