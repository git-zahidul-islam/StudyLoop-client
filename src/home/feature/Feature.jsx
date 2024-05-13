import axios from "axios";
import { useEffect, useState } from "react";
import { CiRead } from "react-icons/ci";
import { MdOutlineDifference } from "react-icons/md";
import { RiNumbersLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Feature = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_WEBSITE_API}/assignments`)
            .then(res => {
                console.log("the getting data:", res.data);
                setData(res.data)
            })
    }, [])

    return (
        <div className="flex flex-col justify-center">
            <h1 className="text-center text-xl font-medium">The Most popular Assignments</h1>
            <p className="w-8/12 text-gray-600 mx-auto text-center">Welcome to the world of largest assignment Community, you can get your assignment from here</p>
            <div className="grid md:grid-cols-3 gap-5 px-3 mt-8">
                    {
                        data.slice(0, 3).map(ass => <div key={ass._id} className="">
                            <div className=" overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                                <img className="object-cover object-center w-full lg:h-56 md:h-48 h-36" src={ass?.photo} alt="avatar" />

                                <div className="flex items-center justify-around py-3 bg-gray-900">
                                    <h1 className="text-lg font-semibold text-white flex items-center gap-3"><MdOutlineDifference size={30} />{ass?.diff}</h1>
                                    <h1 className="text-lg font-semibold text-white flex items-center gap-3"><RiNumbersLine size={30} />{ass?.mark}</h1>
                                </div>

                                <div className="py-3">
                                    <h1 className="text-xl font-semibold text-gray-800 dark:text-white min-h-14">{ass?.title}</h1>
                                    <div className="text-white font-semibold ">
                                        {/* <div className="w-1/3 text-center bg-purple-300">
                                        <Link to={`/update-assignments/${ass?._id}`}>
                                            <button className="p-3 flex items-center gap-3 justify-center w-full"><GrUpdate size={20} />Update</button>
                                        </Link>
                                    </div>
                                    <div className="w-1/3 text-center bg-purple-400">
                                        <button onClick={() => handleDelete(ass?._id)} className="p-3 flex items-center gap-3 justify-center w-full"><MdOutlineDeleteForever size={25} />Delete</button>
                                    </div> */}
                                        <div className="w-full text-center bg-purple-500">
                                            <Link to={`/assignments/${ass?._id}`}>
                                                <button className="p-3 flex items-center gap-3 justify-center w-full"><CiRead size={25} />View</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }            
            </div>
        </div>
    );
};

export default Feature;