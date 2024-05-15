import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";


const Dropdown = ({ handleLogout }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const {user} = useContext(AuthContext)

    const toggleDropDown = () => {
        setDropdownOpen(!dropdownOpen)
    }

    const handleMyAttamptClick =()=>{
        toggleDropDown()
    }

    return (
        <>
            {/* <!-- ====== Dropdowns Section Start --> */}
            <section className=" dark:bg-dark">
                <div className="container">
                    <div className="flex flex-wrap">
                        {/* one */}
                        <div  className="w-full">
                            <div className="text-center">
                                <div className="relative inline-block text-left">
                                    <button
                                        onClick={() => setDropdownOpen(!dropdownOpen)}
                                        className={`flex items-center rounded-[5px] text-base font-medium text-white`}
                                    >
                                        <div className="avatar">
                                            <div className="w-10 rounded-full">
                                                <img src={`${user?.photoURL}`} />
                                            </div>
                                        </div>
                                    </button>
                                    <div
                                        className={`shadow-1 dark:shadow-box-dark absolute -left-16 z-40 mt-2 w-36 rounded-md bg-[#807182] dark:bg-dark-2  transition-all ${dropdownOpen
                                            ? "top-full opacity-100 visible"
                                            : "top-[110%] invisible opacity-0"
                                            }`}
                                    >
                                        <button onClick={handleMyAttamptClick} className="px-3 py-2 w-full hover:bg-slate-300" ><Link to={'/my-attempted'}>My Attempt</Link></button>
                                        <button className="px-3 py-2 w-full hover:bg-slate-300" onClick={handleLogout}>Logout</button>

                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End */}
                    </div>
                </div>
            </section>
            {/* <!-- ====== Dropdowns Section End -->    */}
        </>
    );
};

export default Dropdown;
