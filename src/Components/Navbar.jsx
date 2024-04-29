import { Link, NavLink } from "react-router-dom";
import logoImage from "../../public/LogoH.png";
import userImage from "../../src/assets/user.png"
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";

const Navbar = () => {
  const {user, nameUser, signOut1} = useContext(AuthContext);
    const [theme, setTheme] = useState("light");

    const handleSignOut = () => {
      signOut1()
      .then(result => {
        console.log(result.user);
      })
      .catch(error => {
        console.log(error.message);
      })
    }

    useEffect(() => {
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme', localTheme)
    },[theme])


    const handleTheme = (e) => {
        if(e.target.checked){
            setTheme("synthwave")
        }else{
            setTheme('light')
        }
    }
  return (
    <div className="navbar bg-[#00000099] backdrop-blur-8 pr-10 pl-10 fixed z-10 shadow-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content gap-4 w-[350px] mt-3 z-[1] p-2 shadow bg-base-100 rounded-box">
            <NavLink to='/' className={({isActive}) => isActive ? 'text-primary   font-bold text-lg' : 'font-bold text-lg'}>Home</NavLink>
            <NavLink  to='/addItem' className={({isActive}) => isActive ? 'text-primary  font-bold text-lg' : 'font-bold text-lg'} >Add Craft Item</NavLink>
            <li className="w-[300px]">
            <details>
              <summary className="text-lg  font-medium">All Art & craft Items</summary>
              <ul className="p-2 font-medium pl-4 w-[300px]">
                <li>
                  <NavLink to = '/allArtCraft' className={({isActive}) => isActive ? 'text-primary  font-bold text-lg' : 'font-bold text-lg'}>All Art and Craft</NavLink>
                </li>
                <li>
                  <NavLink className={({isActive}) => isActive ? 'text-primary  font-bold text-lg' : 'font-bold text-lg'} to='/'>Landscape Painting</NavLink>
                </li>
                <li>
                  <NavLink className={({isActive}) => isActive ? 'text-primary  font-bold text-lg' : 'font-bold text-lg'}>Portrait Drawing</NavLink>
                </li>
                <li>
                  <NavLink className={({isActive}) => isActive ? 'text-primary  font-bold text-lg' : 'font-bold text-lg'}>Watercolour Painting</NavLink>
                </li>
                <li>
                  <NavLink className={({isActive}) => isActive ? 'text-primary  font-bold text-lg' : 'font-bold text-lg'}>Oil Painting</NavLink>
                </li>
                <li>
                  <NavLink className={({isActive}) => isActive ? 'text-primary  font-bold text-lg' : 'font-bold text-lg'}>Charcoal Sketching</NavLink>
                </li>
                <li>
                  <NavLink className={({isActive}) => isActive ? 'text-primary  font-bold text-lg' : 'font-bold text-lg'}>Cartoon Drawing</NavLink>
                </li>
              </ul>
            </details>
          </li>
            <li>
              <details>
                <summary className=" text-lg font-medium">Page</summary>
                <ul className="rounded-lg pl-10">
                  <li className="pt-2 text-base font-bold  text-slate-500">.....</li>
                  <li className="pt-2 text-base font-bold  text-slate-500">......</li>
                  <li className="pt-2 text-base font-bold  text-slate-500">Contact</li>
                  <li className="pt-2 text-base font-bold  text-slate-500">About Us</li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div className="flex gap-2 items-center">
          <div className="w-[75px]">
            <Link to='/'><img src={logoImage} alt="" /></Link>
          </div>
          <div>
            <Link to='/' className=" font-bold text-white text-2xl">Artifacts</Link>
          </div>
        </div>
      </div>
      <div className="navbar-center items-center hidden lg:flex">
        <ul className="menu items-center gap-3 menu-horizontal px-1">
        <NavLink to='/' className={({isActive}) => isActive ? 'text-[#fedb37] font-bold text-lg' : 'font-bold text-white text-lg'}>Home</NavLink>
         
            <NavLink  to='/addItem' className={({isActive}) => isActive ? 'text-[#fedb37]  font-bold text-lg' : 'font-bold text-white text-lg'} >Add Craft Item</NavLink>
          <li>
            <details>
              <summary className="text-lg text-white font-medium">All Art & craft Items</summary>
              <ul className="p-2 font-medium pl-4 w-[300px]">
                <li>
                  <NavLink className={({isActive}) => isActive ? 'text-primary  font-bold text-lg' : 'font-bold text-lg'} to='/allArtCraft'>All Art and Craft</NavLink>
                </li>
                <li>
                  <NavLink className={({isActive}) => isActive ? 'text-primary  font-bold text-lg' : 'font-bold text-lg'} to='/'>Landscape Painting</NavLink>
                </li>
                <li>
                  <NavLink className={({isActive}) => isActive ? 'text-primary  font-bold text-lg' : 'font-bold text-lg'}>Portrait Drawing</NavLink>
                </li>
                <li>
                  <NavLink className={({isActive}) => isActive ? 'text-primary  font-bold text-lg' : 'font-bold text-lg'}>Watercolour Painting</NavLink>
                </li>
                <li>
                  <NavLink className={({isActive}) => isActive ? 'text-primary  font-bold text-lg' : 'font-bold text-lg'}>Oil Painting</NavLink>
                </li>
                <li>
                  <NavLink className={({isActive}) => isActive ? 'text-primary  font-bold text-lg' : 'font-bold text-lg'}>Charcoal Sketching</NavLink>
                </li>
                <li>
                  <NavLink className={({isActive}) => isActive ? 'text-primary  font-bold text-lg' : 'font-bold text-lg'}>Cartoon Drawing</NavLink>
                </li>
              </ul>
            </details>
          </li>
          <li>
              <details>
                <summary className=" text-lg text-white font-medium">Page</summary>
                <ul className="rounded-lg pl-10 w-[200px]">
                  <li className="pt-2 text-base font-bold  text-slate-500">.....</li>
                  <li className="pt-2 text-base font-bold  text-slate-500">......</li>
                  <li className="pt-2 text-base font-bold  text-slate-500">Contact</li>
                  <li className="pt-2 text-base font-bold  text-slate-500">About Us</li>
                </ul>
              </details>
            </li>
              <NavLink className={({isActive}) => isActive ? 'text-[#fedb37] font-bold text-lg' : 'font-bold text-white text-lg'}>My Art&Craft List</NavLink>
            
        </ul>
      </div>
      <div className="navbar-end">
      <div className="navbar-center  lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li>
        <details >
          <summary tabIndex={0} role="button" className="w-16 flex  rounded-full"><img className="rounded-full" alt="" src={userImage} /></summary>
          <ul className="p-2 text-lg font-medium w-[200px] bg-white text-black z-10">
          {nameUser && <div>
          <li>{nameUser?.displayName}</li>
          </div>}
            <li>
              {
               user ? 
               <button onClick={handleSignOut} className="btn text-lg font-bold ">Sign Out</button>
               :
               <Link to='/login'><button className="btn text-lg font-bold ">Login</button></Link>}
               </li>
          </ul>
        </details>
      </li>
    </ul>
</div>
        {
          user ? 
          <button onClick={handleSignOut}  className="btn text-lg font-bold  ">Sign Out</button>
          :
          <Link  to='/login'><button className="btn text-lg font-bold ">Login</button></Link>
        }
      </div>
      <label className="swap swap-rotate">
  
  {/* this hidden checkbox controls the state */}
  <input onChange={handleTheme} type="checkbox" className="theme-controller"  />
  
  {/* sun icon */}
  <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
  
  {/* moon icon */}
  <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
  
</label>
    </div>
  );
};

export default Navbar;
