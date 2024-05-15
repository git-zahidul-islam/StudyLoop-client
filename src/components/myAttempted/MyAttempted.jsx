import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Helmet } from 'react-helmet-async';



const MyAttempted = () => {

    const [data, setData] = useState([])
    const { user } = useAuth()
    // console.log(data);
    // console.log("user data:",user);

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_WEBSITE_API}/my-attempt/${user?.email}`,{withCredentials: true})
            .then(res => {
                setData(res.data)
            })
    }, [user?.email])

    return (
        <div className="container mx-auto min-h-[60vh] my-5 lg:px-0 md:px-0 px-2">
            <Helmet>
                <title>Study Loop | My Attempt</title>
            </Helmet>
            <h1 className="text-lg font-bold">Your Submit Assignments</h1>
            <div className="overflow-x-auto">
                <table className="table text-center border-2">
                    {/* head */}
                    <thead className="bg-[#f87b4aca]">
                        <tr>
                            <th className="border-r-2 text-base text-white">Title</th>
                            <th className="border-r-2 text-base text-white">Mark</th>
                            <th className="border-r-2 text-base text-white">Obtain Mark</th>
                            <th className="border-r-2 text-base text-white">Status</th>
                            <th className="border-r-2 text-base text-white">Feedback</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map(ass => <tr key={ass._id}>
                                <td className="border-r-2">{ass?.title}</td>
                                <td className="border-r-2">{ass?.mark}</td>
                                <td className="border-r-2">{ass?.obtainMark}</td>
                                <td className={`border-r-2`}><p className={`${ass?.status === "pending" ? 'bg-red-400' : 'bg-green-400'} rounded-3xl text-white text-base`}>{ass?.status}</p></td>
                                <td className="border-r-2">{ass?.feedback}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAttempted;