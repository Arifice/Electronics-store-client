import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
    const {user,logOut}=useContext(AuthContext);
    console.log('user',user);
    const handleSignOut=()=>{
        logOut()
        .then(result=>{
            console.log(result);
            Swal.fire({
                icon: "success",
                title: "Yes...",
                text: "You have successfully logout",
                
              });
        })
        .catch(error=>{
            console.log(error);
        })
    }
    const navlink=<>
            <li className="text-2xl font-semibold"> <NavLink to={'/'}>Home</NavLink></li>
            <li className="text-2xl font-semibold"> <NavLink to={'/addproduct'}>Add Product</NavLink></li>
            <li className="text-2xl font-semibold"> <NavLink to={'/product'}>Products</NavLink></li>
            <li className="text-2xl font-semibold"> <NavLink to={'/mycart'}>MyCart</NavLink></li>
            <li className="text-2xl font-semibold"> <NavLink to={'/login'}>Login</NavLink></li>
            <li className="text-2xl font-semibold"> <NavLink to={'/register'}>Register</NavLink></li>
            
            <li className="text-2xl font-semibold"> <NavLink to={'/user'}>User</NavLink></li>
        </>
    return (
        <div className="navbar bg-[#1B9C85] shadow-2xl text-white">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost  lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    {navlink}
                </ul>
                </div>
                <Link to={'/product'}><a className="btn hidden lg:flex md:hidden btn-secondary text-2xl"> E-Shop</a></Link>
            </div>
            <div className="navbar-center  hidden lg:flex">
                <ul className="menu  menu-horizontal px-1">
               {navlink}
                </ul>
            </div>
            <div className="navbar-end flex items-center">
               <div>
                    <img className="w-20 h-20 mr-3 rounded-full" src="" alt="profile picture" />
               </div>
               
               {
                user?
                 <div>
                    <button onClick={handleSignOut} className="btn text-2xl btn-secondary ">Logout</button>
                </div>
                :
                <div>
                    <Link to={'/login'}><button className="btn text-2xl btn-secondary ">Login</button></Link>
                </div>
               }
                
            </div>
        </div>
    );
};

export default Navbar;