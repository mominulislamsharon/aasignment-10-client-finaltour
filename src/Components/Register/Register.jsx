import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { FaEye, FaEyeSlash } from "react-icons/fa";


const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [emailError, setEmailError] = useState();
    const [error, setError] = useState("");
    const location = useLocation();
    const navigate = useNavigate();
    const {registerUser} = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const photo = form.get('photo');
        const password = form.get('password');
        console.log(name, email, photo, password);

        if(!/@gmail\.com$/.test(email)){
            setEmailError('please last @gmail.com')
            return;
          }

        if (!name || !email || !photo || !password) {
            setError('Please fill in all fields.');
            return;
          }
      
          if(password.length < 6){
            setError('Password must be at least 6 characters long.');
            return;
          }
          if(!/[A-Z]/.test(password)) {
            setError("Your password should have at least one uppercase character");
            return;
          }

        setError('');
        setEmailError('');

        registerUser(email, password) 
        .then(result => {
            console.log(result.user)
            toast.success('Registration successful!');
            navigate(location?.state ? location.state : '/');
      })
      .then(() => console.log('Profile Upadated'))
      .catch(error => {
        console.log(error);
      })
        .catch(error => {
            console.error(error);
        })
    }
    return (
        <div className="bg-slate-800 border justify-center flex items-center container mx-auto 
        border-slate-400 rounded-md p-8  shadow-lg sm:w-[500px] md:w-[600px] lg:w-[500px] h-[600px] backdrop-filter backdrop-blur-sm  relative">
            <ToastContainer></ToastContainer>
            <form onSubmit={handleRegister} action="">
                <div>
            <h1 className="text-4xl sm:text-green-500  lg:text-white font-bold text-center mb-8">Create a new account</h1>
            <div className="relative my-4 mb-12">
        <input className="block sm:text-2xl sm:w-[400px] md:w-[200px] lg:w-[400px] lg:text-white py-2.5 px-0 sm:text-orange-500 lg:text-sm  bg-transparent border-0 border-b-2 border-gray-400  appearance-none dark:focus:border-green-300 focus:outline-none focus:ring-0 focus:text-white focus:border-green-600 peer" type="text" name="name"  placeholder="Your Name"  /> 
        </div>
        <div className="relative my-4 mb-12">
        <input className="block sm:text-2xl sm:w-[400px] md:w-[200px] lg:w-[400px] lg:text-white py-2.5 px-0 sm:text-orange-500 lg:text-sm  bg-transparent border-0 border-b-2 border-gray-400  appearance-none dark:focus:border-green-300 focus:outline-none focus:ring-0 focus:text-white focus:border-green-600 peer" type="email" name="email"  placeholder="Your Email" /> 
        </div>
        <div className="relative my-4 mb-12">
        <input className="block sm:text-2xl sm:w-[400px] md:w-[200px] lg:w-[400px] lg:text-white py-2.5 px-0 sm:text-orange-500 lg:text-sm  bg-transparent border-0 border-b-2 border-gray-400  appearance-none dark:focus:border-green-300 focus:outline-none focus:ring-0 focus:text-white focus:border-green-600 peer" type="text" name="photo"  placeholder="Photo Url" /> 
        </div>
        {emailError && <p className="text-red-600">{emailError}</p>}
        <div>
        <input className="block relative sm:text-2xl sm:w-[400px] mb-8 md:w-[200px]  lg:w-[400px] py-2.3 px-0 lg:text-sm lg:text-white bg-transparent border-0 border-b-2 border-gray-400  appearance-none dark:focus:border-green-300 focus:outline-none focus:ring-0 focus:text-white focus:border-green-600 peer" type={showPassword? 'text' : 'password'} name="password" placeholder="Password" />
        <span
            className="text-white absolute right-3  -mt-16 mr-16   "
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        {
          error && <small className="text-red-400">{error}</small>
        }
        <button className="w-full mb-6 text-lg font-bold mt-6 rounded-full bg-white text-green-500 hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300">Register</button>
        <div className="text-center">
          <p className="text-white">Already Have an account? <Link className="ml-2 text-blue-500" to='/login'>Login</Link></p>
        </div>
        </div>
        </form>
        </div>
    );
};

export default Register;