import { NavLink } from "react-router-dom";

const Navbar = () => {
    const navlink=<>
            <li className="text-2xl font-semibold"> <NavLink to={'/'}>Home</NavLink></li>
            <li className="text-2xl font-semibold"> <NavLink to={'/addproduct'}>Add Product</NavLink></li>
            <li className="text-2xl font-semibold"> <NavLink to={'/login'}>Login</NavLink></li>
            <li className="text-2xl font-semibold"> <NavLink to={'/register'}>Register</NavLink></li>
            <li className="text-2xl font-semibold"> <NavLink to={'/mycart'}>My Cart</NavLink></li>
        </>
    return (
        <div className="navbar bg-orange-400">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    {navlink}
                </ul>
                </div>
                <a className="btn btn-secondary text-xl"> E-Shop</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
               {navlink}
                </ul>
            </div>
            <div className="navbar-end flex items-center">
               <div>
                    <img className="w-20 h-20 mr-3 rounded-full" src="" alt="profile picture" />
               </div>
                <div>
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;