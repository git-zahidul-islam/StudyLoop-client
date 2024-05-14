import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';



const PendingAssignments = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_WEBSITE_API}/pending-assignments?status=pending`,{withCredentials: true})
            .then(res => {
                setData(res.data)
            })
    }, [])

    return (
        <div className="container mx-auto my-5 space-y-2">
            <Helmet>
                <title>Study Loop | Pending Assignments</title>
            </Helmet>
            <div className="flex justify-between items-center">
                <h1 className="text-lg font-medium">All Pending Post</h1>
                <h1 className="p-2 bg-[#F9C7C2]">Pending: <span className="text-black text-base bg-[#df938c] p-1 rounded-xl">{data.length}</span></h1>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className="bg-gray-200">
                        <tr>
                            <th>Title</th>
                            <th>Mark</th>
                            <th>Examinee Name</th>
                            <th>Give Mark</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map(ass => <tr key={ass._id}>
                                <th>{ass.title}</th>
                                <td>{ass.mark}</td>
                                <td>{ass?.examinee_name}</td>
                                <td><Link to={`/pending-assignments/${ass._id}`}><button className="p-2 bg-[#807182] text-white rounded-2xl">Give Mark</button></Link></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PendingAssignments;