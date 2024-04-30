
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



const Details = ({item1}) => {
    const { _id } = useParams([]);
    const [isLoading, setIsLoading] = useState(true);
    console.log(_id);
    const [artDetails, setArtDetails] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            console.log(`http://localhost:5000/addItem/${_id}`);
          const response = await fetch(`http://localhost:5000/addItem/${_id}`);
          const data = await response.json();
          setArtDetails(data);
          setIsLoading(false);
        };
    
        fetchData();
      }, [_id]);
      if (isLoading) {
        return <div>Loading...</div>;
      }
  
      if (!artDetails.length) {
        return <div>No art details found</div>;
      }
    const { price, rating, time, item, category, customization, stock, photo, message } = artDetails[0];

    return (
        <div>
            <h1>details.....ddd.....</h1>
            <h1>{price}</h1>
            <h1>{rating}</h1>
        </div>
    );
};

export default Details;