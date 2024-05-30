import axios from "axios";
import { useEffect, useState } from "react";
import { GrView } from "react-icons/gr";
import { Link } from "react-router-dom";
import { SlLayers } from "react-icons/sl";
import { RiAliensFill } from "react-icons/ri";
import AOS from 'aos';
import 'aos/dist/aos.css';
// ..
AOS.init();

const Feature = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_WEBSITE_API}/assignments`,{withCredentials: true})
            .then(res => {
                // console.log("the getting data:", res.data);
                setData(res.data)
            })
    }, [])

    return (
        <div className="flex flex-col justify-center">
            <h1 className="text-center text-3xl font-bold mb-2">Latest Assignments</h1>
            <p className="w-8/12 text-gray-600 mx-auto text-center text-base">Welcome to the world of largest assignment Community, you can get your assignment from here</p>
            <div className="grid md:grid-cols-3 gap-5 px-3 mt-8">
                    {
                    data.slice(0, 3).map(ass => <div data-aos="zoom-in" data-aos-duration="1000" key={ass._id} className="relative">
                            <div className="overflow-hidden bg-white rounded-xl shadow-lg dark:bg-gray-800">
                                <img className="object-cover object-center w-full lg:h-56 md:h-48 h-36" src={ass?.photo} alt="avatar" />

                                <div className="rounded-xl overlay absolute inset-0 bg-[#000000ba] bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100">
                                    <div className="flex items-center justify-center gap-5 h-full text-white">
                                        <div className="flex flex-col gap-2">
                                            <h1 className="flex items-center gap-2"><SlLayers className="text-[#45C7F5]" size={25}/>Mark: {ass?.mark}</h1>
                                            <h1 className="flex items-center gap-2"><RiAliensFill className="text-[#C63D95]" size={30}/>Difficulty: {ass?.diff}</h1>
                                        </div>
                                        <Link to={`/assignments/${ass._id}`}><GrView className="text-[#F87B4A]" size={40}/></Link>
                                    </div>
                                </div>

                            <div className="py-3 bg-[#efe3bf] text-black ps-4">
                                    <h1 className="text-xl">{ass.title.slice(0,35)}</h1>
                                </div>
                            </div>
                        </div>)
                    }            
            </div>
        </div>
    );
};

export default Feature;