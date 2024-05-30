import axios from "axios";
import { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


const SummeryStats = () => {
    const [data, setData] = useState({})

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_WEBSITE_API}/user-count`)
            .then(res => {
                setData(res.data)
            })
    }, [])

    return (
        <div className="flex justify-center bg-[#807182] lg:py-16 md:py-6 py-6 w-full">

            <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 lg:gap-0 md:gap-0 gap-8 w-full">
                <div className="flex flex-col items-center text-white space-y-4">
                    <div data-aos="flip-right" data-aos-duration="1000" className="w-14">
                        <img className="w-full h-full" src={'https://i.ibb.co/dbgksHb/group-1.png'} alt="" />
                    </div>
                    <h1 data-aos="fade-down" data-aos-duration="1200" className="text-3xl font-bold">{data?.user}</h1>
                    <h2 data-aos="fade-down" data-aos-duration="1400" className="text-sm font-semibold">Total User</h2>
                </div>
                <div className="flex flex-col items-center text-white space-y-4">
                    <div data-aos="flip-right" data-aos-duration="1000" className="w-14">
                        <img className="w-full h-full" src={'https://i.ibb.co/YbGk7VC/assignment.png'} alt="" />
                    </div>
                    <h1 data-aos="fade-down" data-aos-duration="1200" className="text-3xl font-bold">{data?.assignmentCreate}</h1>
                    <h2 data-aos="fade-down" data-aos-duration="1400" className="text-sm font-semibold">Created Assignments</h2>
                </div>
                <div className="flex flex-col items-center text-white space-y-4 col-span-2 lg:col-span-1 md:col-span-1">
                    <div data-aos="flip-right" data-aos-duration="1000" className="w-14">
                        <img className="w-full h-full" src={'https://i.ibb.co/q92VTGp/assignment-1.png'} alt="" />
                    </div>
                    <h1 data-aos="fade-down" data-aos-duration="1200" className="text-3xl font-bold">{data?.submitAssignment}</h1>
                    <h2 data-aos="fade-down" data-aos-duration="1400" className="md:text-sm font-semibold">Submitted Assignments</h2>
                </div>
            </div>
        </div>
    );
};

export default SummeryStats;