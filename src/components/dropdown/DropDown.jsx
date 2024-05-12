import { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

// Handler hook for when Outside click dropdown close
let useClickOutside = (handler) => {
    let domNode = useRef();
    useEffect(() => {
        let maybeHandler = (event) => {
            if (!domNode.current.contains(event.target)) {
                handler();
            }
        };
        document.addEventListener("mousedown", maybeHandler);
        return () => {
            document.removeEventListener("mousedown", maybeHandler);
        };
    });

    return domNode;
};
// Handler hook for when Outside click dropdown close End Code====>>



const Dropdown = ({ handleLogout }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const {user} = useContext(AuthContext)

    let domNode = useClickOutside(() => {
        setDropdownOpen(false);
    });

    return (
        <>
            {/* <!-- ====== Dropdowns Section Start --> */}
            <section className=" dark:bg-dark">
                <div className="container">
                    <div className="flex flex-wrap">
                        {/* one */}
                        <div ref={domNode} className="w-full">
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
                                        <button className="px-3 py-2 w-full hover:bg-slate-300"><Link to={'/my-attempted'}>My Attempt</Link></button>
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

const DropdownItem = ({ label, href }) => {
    return (
        <a
            href={href}
            className="text-body-color dark:text-dark-6 hover:bg-[#F5F7FD] dark:hover:bg-primary/5 hover:text-primary block px-5 py-2 text-base"
        >
            {label}
        </a>
    );
};
