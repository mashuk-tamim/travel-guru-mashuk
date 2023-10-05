import { Link } from "react-router-dom";
import logo from '../../assets/logo.png';
import { BsSearch } from 'react-icons/bs';


const Navbar = () => {

    const navLinks = <div className="flex gap-5 lg:gap-12 text-sm lg:text-base text-white font-montserrat">
        <Link to='/news'>News</Link>
        <Link to='/destination'>Destination</Link>
        <Link to='/blog'>Blog</Link>
        <Link to='/contact'>Contact</Link>
    </div>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <img className="w-1/4 bg-white" src={logo} alt="" />

                </div>
                <div className="flex-none gap-2 relative">
                    <form>
                        <div className="form-control">
                            <input 
                            type="text" 
                            name='search'
                            placeholder="Search Your Destination..." className="py-2 rounded-lg md:w-auto lg:w-80 pl-10 pr-5 bg-gray-500 text-white placeholder-white" />
                            <span className="absolute top-3 left-4 text-xl text-white"><BsSearch></BsSearch></span>
                        </div>
                    </form>
                </div>
                <div className="navbar-end hidden md:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;