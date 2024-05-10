import { Link, NavLink } from "react-router-dom";


const NavBar = () => {
    const navLink =<div className="flex gap-4 mr-2 lg:flex-row md:flex-row flex-col text-lg font-semibold"> 
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/assignments'}>Assignments</NavLink></li>
        <li><NavLink to={'/create-assignments'}>Create Assignments</NavLink></li>
        <li><NavLink to={'/pending-assignments'}>Pending Assignments</NavLink></li>
    </div>

    return (
        <div className="navbar  border-b-[1px] border-gray-200 bg-[#FFF8E3]">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLink}
                    </ul>
                </div>
                <Link to={'/'} className="text-xl font-bold text-green-400">Study Loop</Link>
            </div>
            {/* <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLink}
                </ul>
            </div> */}
            <div className="navbar-end">
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu-horizontal">
                        {navLink}
                    </ul>
                </div>
                <Link to={'/login'} className="bg-green-300">Login</Link>
            </div>
        </div>
    )
}
export default NavBar;