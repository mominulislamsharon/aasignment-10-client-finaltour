import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { Link } from "react-router-dom";


const MyArtList = () => {
    const {user} = useContext(AuthContext);
    const [item2, setItem2] = useState([]);useState
    useEffect(()=> {
        fetch(`http://localhost:5000/myArtList/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setItem2(data);
        })
    },[user])
    return (
        <div className="container mx-auto">
            {
                item2?.map(p => (
                    <div className="overflow-x-auto">
  <div>
  <table className="table mb-2">
    {/* head */}
    <thead>
      <tr className="border-2 rounded-lg">
        <th>
          
        </th>
        <th></th>
        <th></th>
        <th>Item Name</th>
        <th>Rating</th>
        <th>Price</th>
        <th>SUBTOTAL</th>
  <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr className="h-[200px] border-2">
        <th className="border w-16 mt-6">
        <button className=" text-black hover:bg-[#a27d53] w-16 rounded-md p-2">X</button>
        </th>
        <td>
          <div className="">
            <div className="">
              <div className="ml-8">
                <img className=" w-[150px] h-[140px]" src="https://img.freepik.com/premium-photo/fashion-beautiful-black-asian-girl-model-with-cottagecore-dress_962764-160315.jpg?w=826" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
        <td>
        </td>
        <td>{p.item}</td>
        <td>{p.rating}</td>
        <td>{p.price}$</td>
        <td>Total: {p.price}$</td>
      </tr>
      
    </tbody>
    
  </table>
  </div>
  <div className="flex mb-8  justify-between">
    <div >
    <select className="select select-bordered join-item">
    <option disabled selected>Customization</option>
    <option name = 'yes'>Yes</option>
          <option name = 'no' >No</option>
  </select> 
  <select className="select select-bordered join-item">
        <option disabled selected>stock</option>
          <option>In stock</option>
          <option>Order</option>
  </select>
    </div>
  <div>
    <Link to={`/update/${item2._id}`}>
  <button className="bg-[#d3b28f] font-bold text-white hover:bg-[#a27d53] w-24 rounded-md p-2">Update</button>
  </Link>
  </div>
  </div>
</div>

                ))
            }
        </div>
    );
};

export default MyArtList;