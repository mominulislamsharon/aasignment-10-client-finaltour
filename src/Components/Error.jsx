import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div>
            <h1>Error!!!!!!</h1>
            <Link to="/"><button className="btn">BACK</button></Link>
        </div>
    );
};

export default Error;