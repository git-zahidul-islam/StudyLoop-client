import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";



const MyAttempted = () => {

    const [data, setData] = useState([])
    const { user } = useAuth()
    console.log(data);

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_WEBSITE_API}/submit-assignment/${user?.email}`)
            .then(res => {
                setData(res.data)
            })
    }, [user?.email])

    return (
        <div className="container mx-auto min-h-[60vh] my-5">
            <h1 className="text-lg font-bold">Your Submit Assignments</h1>
            <div className="overflow-x-auto">
                <table className="table text-center border-2">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className="border-r-2 text-base text-black">Title</th>
                            <th className="border-r-2 text-base text-black">Mark</th>
                            <th className="border-r-2 text-base text-black">Obtain Mark</th>
                            <th className="border-r-2 text-base text-black">Status</th>
                            <th className="border-r-2 text-base text-black">Feedback</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map(ass => <tr key={ass._id}>
                                <td className="border-r-2">{ass?.title}</td>
                                <td className="border-r-2">{ass?.mark}</td>
                                <td className="border-r-2">{ass?.obtainMark}</td>
                                <td className="border-r-2">{ass?.status}</td>
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